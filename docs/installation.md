# Installation

## Direct Download / CDN

https://unpkg.com/vue-textarea-autosize/dist/vue-textarea-autosize.browser.js

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-textarea-autosize@1.0.4/dist/vue-textarea-autosize.browser.js

Include vue-textarea-autosize after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-textarea-autosize/dist/vue-textarea-autosize.browser.js "></script>
```

## NPM

```sh
$ npm install vue-textarea-autosize
```

## Yarn

```sh
$ yarn add vue-textarea-autosize
```

When used with a module system, you must explicitly install the `vue-textarea-autosize` via `Vue.use()`:

```javascript
import Vue from 'vue'
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-textarea-autosize` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com/devstark-com/vue-textarea-autosize/.git node_modules/vue-textarea-autosize
$ cd node_modules/vue-textarea-autosize
$ npm install
$ npm run build
```
