<template>
  <h2>{{title}}</h2>
  <div class="output">{{this.$store.state.output===''?'0':this.$store.state.output}}</div>
</template>

<script>

export default {
  name: 'calcOutput',
  props: {
    msg: String
  },
  data(){
    return{
      title:'Vue Calculator'
    }
  }
}
</script>
<style>
  .output{
    border: 2px solid gray;
    margin: 20px 0;
    padding: 20px;
    border-radius: 10px;
    font-size: 20px;
    text-align: left;
    word-break: break-all;
  }

</style>