# Guide

## Installation

### NPM

```sh
$ npm i -S vue-textarea-autosize
```

### Yarn

```sh
$ yarn add vue-textarea-autosize
```

### Register the plugin

```javascript
import Vue from 'vue'
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)
```
## Usage

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

```js
this.$refs.myTextarea.$el.focus()
this.$refs.myTextarea.$el.blur()
this.$refs.myTextarea.$el.select()
```
## Interface

### Props

| Props            | Required  | Type            | Default   | Description  |
| ---------------- | --------- | --------------- | --------- | -------------|
| `v-model`          | no     | String, Number  | ''        | value binding |
| `value` | no | String, Number | '' | part of the `v-model` binding |
| `autosize`         | no     | Boolean         | true      | allows to enable/disable auto resizing dynamically |
| `minHeight`        | no     | Number          | null      | min textarea height (reactive behavior) |
| `maxHeight`        | no     | Number          | null      | max textarea height (reactive behavior) |
| `important` | no | Boolean, Array | false | Forces `!important` for style properties e.g. when using [http://cleanslatecss.com/](http://cleanslatecss.com/). <br /><br /> Allowed values: `true`, `false` and<br /><br /> all or some of <br /><br /> `['resize', 'overflow', 'height']`|

### Events

| Name      | Params   | Description  |
| ----------|:---------|--------------|
| input     | value    | fires on textarea content changed. part of the `v-model` binding. [read more](https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events) |

### Slots

There are no slots available
