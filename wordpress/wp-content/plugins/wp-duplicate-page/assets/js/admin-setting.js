jQuery(document).ready(function ($) {
  $("#njt_duplicate_setting_form").submit(function (e) {
    e.preventDefault();
    jQuery(".njt-duplicate-button.is-primary").addClass("is-busy");
    var njtDuplicateRoles = [];
    var njtDuplicatePostTypes = [];
    var njtDuplicateTextLink = "Duplicate";
    var njtDuplicateInEditor = "0";
    var formValue = $(this).serializeArray();
    $.each(formValue, function (index, field) {
      if (field.name == "njt_duplicate_roles[]") {
        njtDuplicateRoles.push(field.value);
      }
      if (field.name == "njt_duplicate_post_types[]") {
        njtDuplicatePostTypes.push(field.value);
      }
      if (field.name == "njt_duplicate_text_link") {
        njtDuplicateTextLink = field.value;
      }
      if (field.name == "njt_duplicate_in_editor") {
        njtDuplicateInEditor = field.value;
      }
    });

    $.ajax({
      url: window.njt_duplicate_page.ajaxUrl,
      type: "POST",
      data: {
        action: "njt_duplicate_page_settings",
        njtDuplicateNonce: window.njt_duplicate_page.ajaxNonce,
        njtDuplicateRoles: njtDuplicateRoles,
        njtDuplicatePostTypes: njtDuplicatePostTypes,
        njtDuplicateTextLink: njtDuplicateTextLink,
        njtDuplicateInEditor: njtDuplicateInEditor,
      },
      error: function () {
        njtDuplicateNotification("Errors", "njt-duplicate-layout");
        jQuery(".njt-duplicate-button.is-primary").removeClass("is-busy");
      },
      success: function () {
        njtDuplicateNotification("Settings saved.", "njt-duplicate-layout");
        jQuery(".njt-duplicate-button.is-primary").removeClass("is-busy");
      },
    });
  });
  $(".njt-duplicate-footer-review-text-link").click(function () {
    $.ajax({
      url: window.njt_duplicate_page.ajaxUrl,
      type: "POST",
      data: {
        action: "njt_duplicate_page_track_review",
        njtDuplicateNonce: window.njt_duplicate_page.ajaxNonce,
      },
    });
    $(".njt-duplicate-footer-not-reviewed-text").hide();
    $(".njt-duplicate-footer-reviewed-text").show();
  });

  // Tooltip functionality
  $(".njt-duplicate-header-link[data-tooltip-content]").each(function () {
    var $link = $(this);
    var tooltipContent = $link.attr("data-tooltip-content");
    var tooltipPlace = $link.attr("data-tooltip-place") || "bottom";

    // Create tooltip element
    var $tooltip = $(
      '<div class="njt-duplicate-tooltip" data-place="' +
        tooltipPlace +
        '">' +
        tooltipContent +
        "</div>"
    );
    $link.append($tooltip);

    // Show tooltip on hover
    $link.on("mouseenter", function () {
      $tooltip.addClass("show");
    });

    // Hide tooltip on mouse leave
    $link.on("mouseleave", function () {
      $tooltip.removeClass("show");
    });
  });
});
function njtDuplicateNotification(messages, containerClass) {
  let notifyHtml =
    '<div class="njt-duplicate-notification"><div class="njt-duplicate-notification-content"><div class="njt-duplicate-notification-success-message"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0" /><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z" /></g></g></svg></div>' +
    messages +
    "</div></div>";
  jQuery("." + containerClass).after(notifyHtml);
  setTimeout(function () {
    jQuery(".njt-duplicate-notification").addClass("NslideDown");
    setTimeout(function () {
      jQuery(".njt-duplicate-notification").remove();
    }, 1000);
  }, 1500);
}
