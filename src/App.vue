<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>vue-textarea-autosize</h1>
    <textarea-autosize
      :min-height="minHeight"
      :max-height="maxHeight"
      v-model="value"
    />
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      minHeight: 50,
      maxHeight: 150,
      value: ''
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
