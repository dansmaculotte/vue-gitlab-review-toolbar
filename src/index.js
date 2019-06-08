module.exports = {
  install: function (Vue, options) {
    if (!options.projectId || options.projectId.length === 0) {
      console.warn('Please enter a Gitlab project id')
      return
    }

    if (!options.mergeRequestId || options.mergeRequestId.length === 0) {
      console.warn('Please enter a Gitlab merge request id')
      return
    }

    if (options.personalAccessToken && options.personalAccessToken.length) {
      const { localStorage } = window;

      try {
        localStorage.setItem('token', options.personalAccessToken);
      } catch (err) {
        return;
      }
    }

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.defer = true
    script.src = 'https://gitlab.com/assets/webpack/visual_review_toolbar.js'
    script.id = 'review-app-toolbar-script'
    script.dataset.projectId = options.projectId
    script.dataset.mergeRequestId = options.mergeRequestId
    script.dataset.mrUrl = options.mergeRequestUrl || 'https://gitlab.com'

    const first = document.getElementsByTagName('script')[0]
    first.parentNode.insertBefore(script, first)
  }
};
