<?php
/**
 * Bulk-assign course images to all Social Worker courses.
 * Place in WordPress root, visit in browser (or run via `php update-course-images.php`).
 * DELETE THIS FILE after use.
 */

// Simple protection — change or remove before deploying
define( 'RUN_KEY', 'ceunits2026' );
if ( php_sapi_name() !== 'cli' && ( ! isset( $_GET['key'] ) || $_GET['key'] !== RUN_KEY ) ) {
    die( 'Unauthorized. Add ?key=ceunits2026 to the URL.' );
}

define( 'ABSPATH_OVERRIDE', true );
define( 'SHORTINIT', false );
require_once __DIR__ . '/wp-load.php';

// ------------------------------------------------------------------
// 1. Locate the 8 course images in the media library by filename
// ------------------------------------------------------------------
$image_slugs = [];
for ( $i = 1; $i <= 8; $i++ ) {
    $image_slugs[] = 'ceunits-com-courses-image-300x300-' . $i; // WP slugifies filenames
}

$attachment_ids = [];
foreach ( $image_slugs as $slug ) {
    $att = get_posts( [
        'post_type'      => 'attachment',
        'post_status'    => 'inherit',
        'name'           => $slug,
        'posts_per_page' => 1,
        'fields'         => 'ids',
    ] );
    if ( ! empty( $att ) ) {
        $attachment_ids[] = $att[0];
    }
}

// Fallback: search by partial filename via postmeta
if ( empty( $attachment_ids ) ) {
    global $wpdb;
    $rows = $wpdb->get_results(
        "SELECT post_id FROM {$wpdb->postmeta}
         WHERE meta_key = '_wp_attached_file'
           AND meta_value LIKE '%CEUnits.com-Courses-Image-300x300-%'
           AND meta_value NOT LIKE '%180x180%'
           AND meta_value NOT LIKE '%150x150%'
           AND meta_value NOT LIKE '%100x100%'
         ORDER BY post_id ASC"
    );
    foreach ( $rows as $row ) {
        $attachment_ids[] = (int) $row->post_id;
    }
    $attachment_ids = array_unique( $attachment_ids );
}

if ( empty( $attachment_ids ) ) {
    die( 'ERROR: Could not find the course images in the media library. Check the filenames.' );
}

echo '<pre>';
echo 'Found ' . count( $attachment_ids ) . " course image attachment(s): " . implode( ', ', $attachment_ids ) . "\n\n";

// ------------------------------------------------------------------
// 2. Query all courses in the Social Worker category
// ------------------------------------------------------------------
$courses = get_posts( [
    'post_type'      => 'courses',
    'post_status'    => 'publish',
    'posts_per_page' => -1,
    'fields'         => 'ids',
    'tax_query'      => [
        [
            'taxonomy' => 'course-category',
            'field'    => 'slug',
            'terms'    => 'social-worker',
        ],
    ],
] );

if ( empty( $courses ) ) {
    die( 'No published courses found in the "social-worker" course-category. Check the taxonomy slug.' );
}

echo 'Found ' . count( $courses ) . " Social Worker courses.\n";
echo "Assigning images (cycling through " . count( $attachment_ids ) . " images)...\n\n";

// ------------------------------------------------------------------
// 3. Cycle through images and assign as featured image
// ------------------------------------------------------------------
$total      = count( $attachment_ids );
$updated    = 0;
$skipped    = 0;

foreach ( $courses as $index => $course_id ) {
    $attachment_id = $attachment_ids[ $index % $total ];
    $current       = get_post_thumbnail_id( $course_id );
    $title         = get_the_title( $course_id );

    if ( (int) $current === (int) $attachment_id ) {
        echo "  SKIP  (already set) [{$course_id}] {$title}\n";
        $skipped++;
        continue;
    }

    $result = set_post_thumbnail( $course_id, $attachment_id );
    if ( $result ) {
        echo "  OK    attachment #{$attachment_id} → [{$course_id}] {$title}\n";
        $updated++;
    } else {
        echo "  FAIL  attachment #{$attachment_id} → [{$course_id}] {$title}\n";
    }
}

echo "\nDone. Updated: {$updated} | Skipped (no change): {$skipped}\n";
echo '</pre>';
