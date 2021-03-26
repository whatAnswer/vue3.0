<template>
  <div>
    home首页
    <HelloWorld :msg="hellowMesg" @my-event="jsChildDate" />
    <div>{{ childDate }}</div>
    <ChangeWord msg="Change Your Vue.js App" v-if="!isShow"/>
    <button @click="getData">ajax测试</button>
    <div class="testscss">
      <div>scss测试</div>
    </div>
    <div class="textscss">
      <button @click="clickNum">vuex数字测试</button>
    </div>
    <div class="textscss">
      <button @click="showHidden">vuex显示隐藏测试</button>
    </div>
    <div>
      <div>展示store里面的todos数组</div>
      <div v-for="item in todos" v-bind:key="item">
        <div>{{ item.id }}</div>
        <div>{{ item.text }}</div>
        <div>{{ item.done }}</div>
      </div>

      <div>展示store里面过滤后的todos数组</div>
      <div v-for="item in filterAfterArr" v-bind:key="item">
        <div>{{ item.id }}</div>
        <div>{{ item.text }}</div>
        <div>{{ item.done }}</div>
      </div>
    </div>
    <div class="textscss">
      <button @click="filterArr">vuex中过滤数组getter测试</button>
    </div>

    <div class="textscss">
      <button @click="products">vuex中使用actions做购物车案例</button>
    </div>

    <div class="textscss">
      <button @click="jump(0)">使用vue-router跳转页面about</button>
      <button @click="jump(1)">使用vue-router跳转页面vod</button>
    </div>
    
    <div>手机适配rem测试</div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import { getSeller } from "../until/api.js";
import HelloWorld from "../components/HelloWorld.vue";
import ChangeWord from "../components/ChangeWord.vue";
import store from "@/store";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    HelloWorld,
    ChangeWord
  },
  data() {
    return {
      filterAfterArr: [],
      childDate: "我是父组件原来的值"
    };
  },

  created(){

  },

  computed: {
    hellowMesg () {
      return "Welcome to Your Vue.js App" + store.state.count;
    },

    // isShow() {
    //   return store.state.isHidden
    // }
    ...mapState({
      isShow: "isHidden",
      todos: "todos"
    })
  },

  mounted() {
    let params = { mobile: "13814525083", password: "123456" };
    axios.post("http://health.keyintt.com/qyuser/newlogin_pwd.jsp", qs.stringify(params), {headers: {"Content-Type":"application/x-www-form-urlencoded"}}
    
    ).then(function(response){
      console.log(response)//成功
    }).catch(function(error){
      console.log(error)//失败
    })
  },

  methods: {
    getData() {
      console.log("22222222222222222");
      let params = { mobile : "13814525083", password : "123456"};
      params = qs.stringify(params);
      getSeller(params).then(res => {
        if (res.status === 200) {
          this.list = res.data.data.menuVoList;
        }
      });
    },

    clickNum() {
      // this.$store.commit("increment")
      this.$store.dispatch("increment");
      console.log(this.$store.state.count);
      console.log(this.hellowMesg);
    },

    showHidden() {
      if (this.isShow) {
        this.$store.commit("isHidden", false);
      }else {
        this.$store.commit("isHidden", true);
      }
    },

    filterArr() {
      this.filterAfterArr = this.$store.getters.doneTodos; // -> [{ id: 1, text: "...", done: true }]
      console.log(this.todos);
    },

    products(){
      this.$store.dispatch("checkout");
    },

    jump(num){
      if (num) {
        this.$router.push("/vod/1");
      }else {
        this.$router.push("/about");
      }
    },

    jsChildDate(data) {
      console.log(data);
      this.childDate = data;
    }
  }
};
</script>

<style lang="scss">
$color: red;
.testscss {
  font-size: 40px;

  div {
    color: $color;
  }
}
</style>
