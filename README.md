# vue-gitlab-review-toolbar

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> Vue.js plugin for Gitlab Review Toolbar

This feature from Gitlab is undocumented. You can find after setting up a review app in merge request.

Component code is accessible [here](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/vendor/assets/javascripts/visual_review_toolbar.js).

![gitlab review button][gitlab-review-button-src]
![gitlab review modal][gitlab-review-modal-src]
![gitlab review personal access token][gitlab-review-personal-access-token-src]
![gitlab review send feedback][gitlab-review-send-feedback-src]

## Setup

1. Add the `@dansmaculotte/vue-gitlab-review-toolbar` dependency with `yarn` or `npm` to your project
2. Configure it:

```js
import Vue from 'vue'
import GitlabReviewToolbar from '@dansmaculotte/vue-gitlab-review-toolbar'

Vue.use(GitlabReviewToolbar, {
  projectId: 'GITLAB_PROJECT_ID',
  mergeRequestId: 'GITLAB_MERGE_REQUEST_ID',
  mergeRequestUrl: 'YOUR_GITLAB_URL',
  personalAccessToken: 'YOUR_PERSONAL_ACCESS_TOKEN'
})
```

## Usage

## Options

### projectId

- Type: `String`
  - Default: `''`

### mergeRequestId

- Type: `String`
  - Default: `''`

### mergeRequestUrl

- Type: `String`
  - Default: `'https://gitlab.com'`

### personalAccessToken

- Type: `String`
  - Default: `''`

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE.md)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@dansmaculotte/vue-segment.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@dansmaculotte/vue-segment

[npm-downloads-src]: https://img.shields.io/npm/v/@dansmaculotte/vue-segment/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@dansmaculotte/vue-segment

[david-dm-src]: https://david-dm.org/dansmaculotte/vue-segment/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/dansmaculotte/vue-segment

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com

[gitlab-review-button-src]: ./images/review-button.png
[gitlab-review-modal-src]: ./images/review-modal.png
[gitlab-review-personal-access-token-src]: ./images/review-personal-access-token.png
[gitlab-review-send-feedback-src]: ./images/review-send-feedback.png
