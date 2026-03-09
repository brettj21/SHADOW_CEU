/* global njtDuplicateEditor, wp */
(function () {
  if (
    !window.wp ||
    !window.wp.editPost ||
    !window.wp.plugins ||
    !njtDuplicateEditor ||
    !njtDuplicateEditor.link
  ) {
    return;
  }

  const { createElement } = wp.element;
  const { PluginPostStatusInfo } = wp.editPost;
  const { Button } = wp.components;
  const { registerPlugin } = wp.plugins;

  const DuplicatePostStatus = () =>
    createElement(
      PluginPostStatusInfo,
      { className: "njt-duplicate-post-status" },
      createElement(
        Button,
        {
          href: njtDuplicateEditor.link,
          isSecondary: true,
          className: "njt-duplicate-editor-button",
          target: "_self",
        },
        njtDuplicateEditor.text
      )
    );

  registerPlugin("njt-duplicate-editor-plugin", {
    render: DuplicatePostStatus,
  });
})();
