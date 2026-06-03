jQuery(document).ready(function () {
  const install_failed = `<div class="fbv-noti-install-failed"><div class="fbv-label-error">Oops! Installation failed.</div><div>Please try <a href="${FBPluginsPageNotification.filebird_install_url}">manual installation</a>.</div></div>`;

  jQuery.fn.exists = function (callback) {
    var args = [].slice.call(arguments, 1);
    if (this.length) {
      callback.call(this, args);
    }
    return this;
  };

  jQuery("#yay-fb-banner-wrapper button.notice-dismiss").click(function () {
    jQuery
      .ajax({
        url: ajaxurl,
        type: "POST",
        dataType: "json",
        data: {
          action: "filebird_plugins_page_notification_hide",
          nonce: FBPluginsPageNotification.nonce,
          days: 7
        },
      })
      .done(function (result) {
        if (!result.success) {
          console.log("Error", result.data.status);
        }
      });
  });

  jQuery(".fbv-nothanks-link.fbv-nothanks-notification").click(function () {
    jQuery
      .ajax({
        url: ajaxurl,
        type: "POST",
        dataType: "json",
        data: {
          action: "filebird_plugins_page_notification_hide",
          nonce: FBPluginsPageNotification.nonce,
        },
      })
      .done(function (result) {
        if (result.success) {
          jQuery("#yay-fb-banner-wrapper").hide("slow");
        } else {
          console.log("Error", result.data.status);
        }
      });
  });


  jQuery(document).on("click", ".fbv-install-button", function (e) {
    e.preventDefault();
    if (
      jQuery(this).hasClass("fbv_installing") ||
      jQuery(this).hasClass("fbv_done")
    )
      return;
    const loading = 'Installing<span class="text-dots"><span>.<span></span>';

    const done = "Go to media";

    var error =
      '<i class="dashicons dashicons-warning"></i>Install failed. Retry';
    var a = jQuery(this);

    jQuery.ajax({
      url: ajaxurl,
      method: "POST",
      data: {
        action: "filebird_plugins_page_notification_install",
        nonce: FBPluginsPageNotification.nonce,
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
            window.location.href = FBPluginsPageNotification.media_url;
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
