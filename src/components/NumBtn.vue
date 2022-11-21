<template>
  <button>{{btnTxt}}</button>
</template>
<script>
export default {
  name: 'NumberBtn',
  props:{
    btnTxt: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
button{
  border-radius: 50%;
  background: #313131;
  color: #fff;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 22px;
  border: 0;
}
button:hover{
  border:1px solid #fff;
  cursor: pointer;
}
</style>