-- ─────────────────────────────────────────────────────────────────────────────
-- Snapshot / restore one test user around a checkout run.
--
-- WHY THIS EXISTS
-- A completed checkout is not reversible by switching branches. Even with
-- Authorize.Net in test mode the success path runs in full, and
-- TRAININGS::insertCertificates() DELETES the row from CEU_TRAININGS_TAKEN
-- after writing the certificate (Trainings.class.php, removeTrainingTaken).
-- CEU_TRAININGS_TAKEN is what the cart reads, so a test purchase consumes the
-- course: it leaves Completed Courses and cannot be bought again without
-- sitting the training a second time.
--
-- Shadow talks to the live CEU_DB, so run this against ONE throwaway account
-- and never against a real customer.
--
-- USAGE
--   1. set @uid below to the test account's CEU_USER.ID
--   2. run the SNAPSHOT section once, before testing
--   3. test as often as you like, running RESTORE between attempts
--   4. run CLEAN UP when finished
--
-- RESTORE IS DESTRUCTIVE: it deletes the user's live rows and re-inserts the
-- snapshot. It therefore refuses to run unless a snapshot exists AND was taken
-- for this same @uid — without those guards, running it out of order would
-- delete the rows and put nothing back. Do not remove the guards.
-- ─────────────────────────────────────────────────────────────────────────────

SET @uid := 0;   -- <<< the test account's CEU_USER.ID


-- ── SNAPSHOT ────────────────────────────────────────────────────────────────
-- Copies only this user's rows. Safe to re-run: each starts from a DROP.

DROP TABLE IF EXISTS ZZ_BAK_TRAININGS_TAKEN;
CREATE TABLE ZZ_BAK_TRAININGS_TAKEN AS
    SELECT * FROM CEU_TRAININGS_TAKEN WHERE USER_ID = @uid;

DROP TABLE IF EXISTS ZZ_BAK_CERTIFICATES;
CREATE TABLE ZZ_BAK_CERTIFICATES AS
    SELECT * FROM CEU_CERTIFICATES WHERE USER_ID = @uid;

DROP TABLE IF EXISTS ZZ_BAK_USER_DISCOUNTS;
CREATE TABLE ZZ_BAK_USER_DISCOUNTS AS
    SELECT * FROM CEU_USER_DISCOUNTS WHERE USER_ID = @uid;

DROP TABLE IF EXISTS ZZ_BAK_TRANSACTIONS;
CREATE TABLE ZZ_BAK_TRANSACTIONS AS
    SELECT * FROM CEU_TRANSACTIONS WHERE USER_ID = @uid;

-- Records WHICH account the snapshot is of, so RESTORE cannot be pointed at a
-- different one and delete rows it has no backup for.
DROP TABLE IF EXISTS ZZ_BAK_META;
CREATE TABLE ZZ_BAK_META (uid INT NOT NULL, taken_at DATETIME NOT NULL);
INSERT INTO ZZ_BAK_META VALUES (@uid, NOW());


-- ── RESTORE ─────────────────────────────────────────────────────────────────
-- Puts the account back exactly as the snapshot found it. Run between attempts.
--
-- The transaction rows matter as much as the trainings: a promo counts as spent
-- when the code appears in one of the user's INVOICE_NUMs, so leaving a test
-- transaction behind makes that code unusable for the next run.

-- Guard 1 — all five snapshot tables must exist.
-- Written as a prepared statement on purpose. MySQL resolves table names when it
-- parses a statement, so a plain SELECT naming a missing table fails even on the
-- branch that is not taken; building the SQL as a string defers that to the point
-- the guard actually fails. The mysql client stops on error by default, so the
-- DELETEs below are never reached.
SET @have := (SELECT COUNT(*) FROM information_schema.TABLES
              WHERE TABLE_SCHEMA = DATABASE()
                AND TABLE_NAME IN ('ZZ_BAK_TRAININGS_TAKEN', 'ZZ_BAK_CERTIFICATES',
                                   'ZZ_BAK_USER_DISCOUNTS', 'ZZ_BAK_TRANSACTIONS',
                                   'ZZ_BAK_META'));
SET @sql := IF(@have = 5,
    "SELECT 'snapshot present' AS guard_1",
    "SELECT * FROM ZZ_ABORT_NO_SNAPSHOT_RUN_THE_SNAPSHOT_SECTION_FIRST");
PREPARE g1 FROM @sql; EXECUTE g1; DEALLOCATE PREPARE g1;

-- Guard 2 — the snapshot must belong to this @uid.
SET @snap_uid := (SELECT uid FROM ZZ_BAK_META LIMIT 1);
SET @sql := IF(@snap_uid = @uid,
    "SELECT 'uid matches snapshot' AS guard_2",
    "SELECT * FROM ZZ_ABORT_SNAPSHOT_IS_FOR_A_DIFFERENT_USER");
PREPARE g2 FROM @sql; EXECUTE g2; DEALLOCATE PREPARE g2;

START TRANSACTION;

DELETE FROM CEU_TRAININGS_TAKEN WHERE USER_ID = @uid;
INSERT INTO CEU_TRAININGS_TAKEN SELECT * FROM ZZ_BAK_TRAININGS_TAKEN;

DELETE FROM CEU_CERTIFICATES WHERE USER_ID = @uid;
INSERT INTO CEU_CERTIFICATES SELECT * FROM ZZ_BAK_CERTIFICATES;

DELETE FROM CEU_USER_DISCOUNTS WHERE USER_ID = @uid;
INSERT INTO CEU_USER_DISCOUNTS SELECT * FROM ZZ_BAK_USER_DISCOUNTS;

DELETE FROM CEU_TRANSACTIONS WHERE USER_ID = @uid;
INSERT INTO CEU_TRANSACTIONS SELECT * FROM ZZ_BAK_TRANSACTIONS;

COMMIT;


-- ── CHECK ───────────────────────────────────────────────────────────────────
-- live and snapshot should match on every row after a restore.

SELECT 'trainings_taken' AS what,
       (SELECT COUNT(*) FROM CEU_TRAININGS_TAKEN WHERE USER_ID = @uid) AS live,
       (SELECT COUNT(*) FROM ZZ_BAK_TRAININGS_TAKEN)                   AS snapshot
UNION ALL SELECT 'certificates',
       (SELECT COUNT(*) FROM CEU_CERTIFICATES WHERE USER_ID = @uid),
       (SELECT COUNT(*) FROM ZZ_BAK_CERTIFICATES)
UNION ALL SELECT 'user_discounts',
       (SELECT COUNT(*) FROM CEU_USER_DISCOUNTS WHERE USER_ID = @uid),
       (SELECT COUNT(*) FROM ZZ_BAK_USER_DISCOUNTS)
UNION ALL SELECT 'transactions',
       (SELECT COUNT(*) FROM CEU_TRANSACTIONS WHERE USER_ID = @uid),
       (SELECT COUNT(*) FROM ZZ_BAK_TRANSACTIONS);


-- ── CLEAN UP ────────────────────────────────────────────────────────────────
-- Only after a final RESTORE.
--
-- DROP TABLE ZZ_BAK_TRAININGS_TAKEN, ZZ_BAK_CERTIFICATES,
--            ZZ_BAK_USER_DISCOUNTS, ZZ_BAK_TRANSACTIONS, ZZ_BAK_META;
