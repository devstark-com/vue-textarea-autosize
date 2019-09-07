<template>
  <div class="demo">
    <h1>vue-textarea-autosize demo</h1>
    <textarea-autosize
      v-model="value"
    />
  </div>
</template>
<script>
export default {
  name: 'Demo',
  data () {
    return {
      value: ''
    }
  }
}
</script>
