jQuery(document).ready(function () {
  // Add help tip icon to YayMail column header
  var $yaymailTh = jQuery("th").filter(function () {
    return jQuery(this).text().trim() === "YayMail";
  });
  if ($yaymailTh.length) {
    var $tip = jQuery(
      '<span class="woocommerce-help-tip" data-tip="' +
        yaymailWCColumnCross.helpText +
        '"></span>',
    );
    $yaymailTh.append($tip);
    if (jQuery.fn.tipTip) {
      $tip.tipTip({
        attribute: "data-tip",
        fadeIn: 50,
        fadeOut: 50,
        delay: 200,
        keepAlive: true,
      });
    }
  }

  // Install / Activate YayMail
  jQuery(".yaymail-wc-settings-install-yaymail").click(function (e) {
    e.preventDefault();
    var $btn = jQuery(this);
    var originalText = $btn.text().trim();
    $btn
      .prop("disabled", true)
      .text("Processing…")
      .addClass("updating-message");

    jQuery.ajax({
      url: ajaxurl,
      method: "POST",
      data: {
        action: "yaymail_wc_settings_install_activate",
        nonce: yaymailWCColumnCross.nonce,
      },
      success: function (response) {
        if (response.success) {
          window.location.href = yaymailWCColumnCross.yaymailUrl;
        } else {
          alert(
            response.data && response.data.message
              ? response.data.message
              : "Something went wrong.",
          );
          $btn
            .prop("disabled", false)
            .text(originalText)
            .removeClass("updating-message");
        }
      },
      error: function () {
        alert("Request failed. Please try again.");
        $btn
          .prop("disabled", false)
          .text(originalText)
          .removeClass("updating-message");
      },
    });
  });
});
