# vue-textarea-autosize

[![npm](https://img.shields.io/npm/v/vue-textarea-autosize.svg) ![npm](https://img.shields.io/npm/dm/vue-textarea-autosize.svg)](https://www.npmjs.com/package/vue-textarea-autosize)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Vue component provides textarea with automatically adjustable height and without any wrappers and dependencies

# Finctionality

- `v-model` binding in parent
- min/max height limitation
- enable/disable auto resizing dynamically

Note

- You are able to handle all native events via `@eventname.native` [read more](https://vuejs.org/v2/guide/components.html#Binding-Native-Events-to-Components)
- There is no any CSS from box, so you are free to style it as you wish

# Install

Install with npm
```
npm install vue-textarea-autosize --save
```
or with yarn
```
yarn add vue-textarea-autosize
```

## Adding into app

In your main.js
```js
import Vue from 'vue'
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)
```

# Usage

In components
```html
<textarea-autosize
  placeholder="Type something here..."
  ref="someName"
  v-model="someValue"
  :min-height="30"
  :max-height="350"
  @blur.native="onBlurTextarea"
></textarea-autosize>
```

Focus/blur or select content in components
```js
this.$refs.someName.$el.focus()
this.$refs.someName.$el.blur()
this.$refs.someName.$el.select()
```

# Interface

### Props

| Props            | Required  | Type            | Default   | Description  |
| ---------------- | --------- | --------------- | --------- | -------------|
| autosize         | false     | Boolean         | true      | allow to enable/disable auto resizing dynamically |
| minHeight        | false     | Number          | null      | min textarea height |
| maxHeight        | false     | Number          | null      | max textarea height |

### Events

| Name      | Params   | Description  |
| ----------|:---------|--------------|
| input     | value    | fires on textarea content changed. part of a `v-model` binding. [read more](https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events) |

### Slots

There is no any slots available

---

## License

[MIT](http://opensource.org/licenses/MIT)

