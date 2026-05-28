jQuery(document).ready(function () {
  const fbv_cross = `<div id="filebird_cross" class="fbv-cross-wrap">
    <div class="fbv-cross-popup">
      <div class="fbv-cross-icon-wrap">
        <i class="fbv-icon fbv-i-folder"></i>
        <i class="dashicons dashicons-no-alt"></i>
      </div>
      <div class="fbv-cross-sub">
        <span>Organize your files</span>
      </div>
    </div>
    <div class="fbv-cross-window">
      <div class="fbv-cross-window-mess">
        <h3>Your WordPress media library is messy?</h3>
        <span>Start using FileBird to organize your files into folders by drag and drop.</span>
      </div>
      <div class="fbv-cross-window-img-wrap">
        <img src="https://ps.w.org/filebird/assets/screenshot-2.gif" alt="screenshot_demo">
      </div>
      <div class="fbv-cross-window-btn">
        <div><a class="button button-primary fbv-cross-install" href="javascript:;"><i class="dashicons dashicons-wordpress-alt"></i>Install for free</a></div>
        <div><a class="fbv-cross-link fbv-cross-hide-popup" href="javascript:;" rel="noopener noreferrer">Don't display again</a></div>
      </div>
    </div>
  </div>`;

  const install_failed = `<div class="fbv-noti-install-failed"><div class="fbv-label-error">Oops! Installation failed.</div><div>Please try <a href="${yaySidebarPopupCross.filebird_install_url}">manual installation</a>.</div></div>`;

  jQuery.fn.exists = function (callback) {
    var args = [].slice.call(arguments, 1);
    if (this.length) {
      callback.call(this, args);
    }
    return this;
  };

  // Floating popup (footer)
  jQuery("body.upload-php #wpfooter").exists(function () {
    if (yaySidebarPopupCross.show_popup) {
      // Check if
      const wpbody = jQuery("body.upload-php #wpbody");
      if (wpbody.hasClass("yay-fb-has-sidebar")) {
        return;
      }
      this.append(fbv_cross);
    }
  });

  jQuery(".fbv-cross-popup").click(function () {
    jQuery(this).parent().toggleClass("fbv-cross-popup-open");
  });
  jQuery(".fbv-cross-link.fbv-cross-hide-popup").click(function () {
    const a = jQuery("#filebird_cross");
    jQuery.ajax({
      url: ajaxurl,
      method: "POST",
      data: {
        action: "yay_media_filebird_cross_hide",
        type: "media",
        nonce: yaySidebarPopupCross.nonce,
      },
      beforeSend: function () {
        a.removeClass("fbv-cross-popup-open").addClass("fbv_permanent_hide");
      },
      success: function () {
        setTimeout(function () {
          a.remove();
        }, 2000);
      },
    });
  });

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
        action: "yay_media_filebird_cross_install",
        nonce: yaySidebarPopupCross.nonce,
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
            window.location.href = yaySidebarPopupCross.media_url;
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
