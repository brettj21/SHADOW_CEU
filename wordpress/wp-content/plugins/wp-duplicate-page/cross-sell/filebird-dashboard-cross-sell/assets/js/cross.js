jQuery(document).ready(function () {
  const install_failed = `<div class="fbv-noti-install-failed"><div class="fbv-label-error">Oops! Installation failed.</div><div>Please try <a href="${yayDashboardCross.filebird_install_url}">manual installation</a>.</div></div>`;

  jQuery.fn.exists = function (callback) {
    var args = [].slice.call(arguments, 1);
    if (this.length) {
      callback.call(this, args);
    }
    return this;
  };

  // Event delegation handles both popup button and any dynamically added .fbv-cross-install
  jQuery(document).on("click", ".fbv-cross-install", function (e) {
    e.preventDefault();
    if (
      jQuery(this).hasClass("fbv_installing") ||
      jQuery(this).hasClass("fbv_done")
    )
      return;
    const loading =
      '<i class="dashicons dashicons-update-alt"></i>Installing<span class="text-dots"><span>.<span></span>';

    const done =
      '<i class="dashicons dashicons-saved"></i>Installed! Organize files now';

    var error =
      '<i class="dashicons dashicons-warning"></i>Install failed. Retry';
    var a = jQuery(this);

    jQuery.ajax({
      url: ajaxurl,
      method: "POST",
      data: {
        action: "yay_dashboard_filebird_cross_install",
        nonce: yayDashboardCross.nonce,
      },
      beforeSend: function () {
        a.focusout();
        a.addClass("fbv_installing");
        a.html(loading);
      },
      success: function (response) {
        if (response.success) {
          a.removeClass("fbv_installing").addClass("fbv_done");
          a.html(done);
          a.off("click");
          a.click(() => {
            window.location.href = yayDashboardCross.media_url;
          });
        } else {
          a.removeClass("fbv_installing").addClass("fbv_error");
          a.parent().after(install_failed);
          a.html(error);
        }
      },
      error: function () {
        a.removeClass("fbv_installing").addClass("fbv_error");
        a.parent().after(install_failed);
        a.html(error);
      },
    });
  });
});
