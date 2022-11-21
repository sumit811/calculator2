<template>
  <div class="main">
    <div class="calculator">
      <calcOutput />
      <calcBody />
    </div>
  </div>
</template>

<script>
import calcOutput from './components/Output.vue'
import calcBody from './components/calcBody.vue'

export default {
  name: 'App',
  components: {
    calcOutput,
    calcBody
  }
}
</script>

<style lang="scss">
body{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.calculator{
  width: 300px;
  margin: auto;
  background: #000;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}
</style>
