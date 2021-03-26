<template>
  <div>
    404 Not Found 无数据
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from "@/store"
export default {
  name: "Notfound",
  data() {
    return {
      text: 'Welcome to Your Vue.js App de about页面'
    }
  },
  
  computed: mapState({
    countPlusLocalState (state) {
      return this.text + state.count
    },

    isHidden: 'isHidden'
  })
};
</script>

<style>

</style>
