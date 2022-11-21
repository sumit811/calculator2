<template>
  <div>
    <table class="table" style="width:100%">
      <tr>
        <td><CalcBtn btnTxt="C" bgColor="#9f9f9f" txtColor="#000" @click="clear"/></td>
        <td><CalcBtn btnTxt="&#37;" bgColor="#9f9f9f" txtColor="#000" @click="numBtnClicked('%')"/></td>
        <td><CalcBtn btnTxt="&#9224;" bgColor="#9f9f9f" txtColor="#000" @click="bs"/></td>
        <td><CalcBtn btnTxt="&#247;" @click="numBtnClicked('/')"/></td>
      </tr>
      <tr>
        <td><NumBtn btnTxt="7" @click="numBtnClicked('7')"/></td>
        <td><NumBtn btnTxt="8" @click="numBtnClicked('8')"/></td>
        <td><NumBtn btnTxt="9" @click="numBtnClicked('9')"/></td>
        <td><CalcBtn btnTxt="x" @click="numBtnClicked('*')"/></td>
      </tr>
      <tr>
        <td><NumBtn btnTxt="4" @click="numBtnClicked('4')"/></td>
        <td><NumBtn btnTxt="5" @click="numBtnClicked('5')"/></td>
        <td><NumBtn btnTxt="6" @click="numBtnClicked('6')"/></td>
        <td><CalcBtn btnTxt="-" @click="numBtnClicked('-')"/></td>
      </tr>
      <tr>
        <td><NumBtn btnTxt="1" @click="numBtnClicked('1')"/></td>
        <td><NumBtn btnTxt="2" @click="numBtnClicked('2')"/></td>
        <td><NumBtn btnTxt="3" @click="numBtnClicked('3')"/></td>
        <td><CalcBtn btnTxt="+" @click="numBtnClicked('+')"/></td>
      </tr>
      <tr>
        <td><NumBtn btnTxt="0" @click="numBtnClicked('0')"/></td>
        <td><NumBtn btnTxt="." @click="numBtnClicked('.')"/></td>
        <td colspan="2"><CalcBtn btnTxt="=" @click="result" style="width:100%;border-radius:10px;"/></td>
      </tr>
    </table>
    
  </div>
</template>
<script>
import NumBtn from './NumBtn.vue'
import CalcBtn from './CalcBtn.vue'

export default {
  components: {
    NumBtn,CalcBtn
  },
  mounted(){
    window.addEventListener("keypress", function(e) {
      if(e.keyCode === 13){
        this.result();
      }
      if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)){
        this.numBtnClicked(String.fromCharCode(e.keyCode));
      }
      if (e.key == "Escape") {
        this.clear();
      }
    }.bind(this));
  },
  methods:{
    numBtnClicked:function(num){
      this.$store.commit('output',num)
    },
    result:function(){
      this.$store.commit('result');
    },
    clear:function(){
      this.$store.commit('clear');
    },
    bs:function(){
      this.$store.commit('backspace');
    }
  }
}
</script>