# vue-textarea-autosize

[![npm](https://img.shields.io/npm/v/vue-textarea-autosize.svg) ![npm](https://img.shields.io/npm/dm/vue-textarea-autosize.svg)](https://www.npmjs.com/package/vue-textarea-autosize)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Vue component provides textarea with automatically adjustable height and without any wrappers and dependencies

# Finctionality

- `v-model` binding in parent
- min/max height limitation
- enable/disable auto resizing dynamically

Note

- You are able to handle all native events with `.native` modifier [read more](https://vuejs.org/v2/guide/components.html#Binding-Native-Events-to-Components)
- You are able to use native attrs like this `<textarea-autosize rows="1" ... />`
- There is no CSS out of the box, so you feel free to style it as you wish

# Install

Install with npm
```
npm i -S vue-textarea-autosize
```
or with yarn
```
yarn add vue-textarea-autosize
```

## Add to your app

```js
import Vue from 'vue'
import TextareaAutosize from 'vue-textarea-autosize'

Vue.use(TextareaAutosize)
```

# Usage

In components
```html
<textarea-autosize
  placeholder="Type something here..."
  ref="myTextarea"
  v-model="value"
  :min-height="30"
  :max-height="350"
  @blur.native="onBlurTextarea"
/>
```

Focus/blur or select content in components
```js
this.$refs.myTextarea.$el.focus()
this.$refs.myTextarea.$el.blur()
this.$refs.myTextarea.$el.select()
```

# Interface

### Props

| Props            | Required  | Type            | Default   | Description  |
| ---------------- | --------- | --------------- | --------- | -------------|
| `v-model`          | no     | String, Number  | ''        | value binding |
| `value` | no | String, Number | '' | part of the `v-model` binding |
| `autosize`         | no     | Boolean         | true      | allow to enable/disable auto resizing dynamically |
| `minHeight`        | no     | Number          | null      | min textarea height |
| `maxHeight`        | no     | Number          | null      | max textarea height |
| `important` | no | Boolean, Array | false | Force !important for style properties e.g. when using [http://cleanslatecss.com/](http://cleanslatecss.com/). Allowed values: `true`, `false`, all or some of `['resize', 'overflow', 'height']`|

### Events

| Name      | Params   | Description  |
| ----------|:---------|--------------|
| input     | value    | fires on textarea content changed. part of the `v-model` binding. [read more](https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events) |

### Slots

There are no slots available

---

## License

[MIT](http://opensource.org/licenses/MIT)
