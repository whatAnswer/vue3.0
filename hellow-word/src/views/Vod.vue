<template>
  <div>
    vod{{countPlusLocalState}}/{{isHidden}}

    <div @click="jump(1)">vod1</div>
    <div @click="jump(2)">vod2</div>
    <div @click="jump(3)">vod3</div>
    <div @click="jump(4)">vod4</div>
    <div @click="jump(5)">vod5</div>
    <div @click="jump(6)">vod6</div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "Vod",
  data() {
    return {
      text: "Welcome to Your Vue.js App de about页面"
    }
  },

  methods: {
    jump(num){
      this.$router.push("/vod/" + num);
    }
  },

  created() {
    console.log("vodvodvod")
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // 对路由变化做出响应...
        console.log(toParams);
        console.log(previousParams);
      }
    )
  },
  
  computed: mapState({
    countPlusLocalState (state) {
      return this.text + state.count
    },

    isHidden: "isHidden"
  })
};
</script>

<style>

</style>
