<template>
  <button>{{btnTxt}}</button>
</template>
<script>
export default {
  name: 'CalcBtn',
  props:{
    btnTxt: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: '#f69906'
    },
    txtColor: {
      type: String,
      default: '#fff'
    }
  },
}
</script>
<style scoped >
button{
  border-radius: 50%;
  background: v-bind(bgColor);
  color: v-bind(txtColor);
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 22px;
  border: 0;
}
button:hover{
  border:1px solid v-bind(txtColor);
  cursor: pointer;
}
</style>