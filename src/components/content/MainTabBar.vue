<!--  -->
<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="orange">
        <img slot="item-icon"  src="~assets/img/logo.png"  alt="" />
        <img slot="item-icon-active" src="~assets/img/ningmeng.png" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="orange">
        <img slot="item-icon" src="~assets/img/logo.png" alt="" />
        <img slot="item-icon-active" src="~assets/img/ningmeng.png" alt="" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="orange">
        <img slot="item-icon" src="~assets/img/logo.png" alt="" />
        <img slot="item-icon-active" src="~assets/img/ningmeng.png"  alt="" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="orange">
        <img slot="item-icon" src="~assets/img/logo.png" alt="" />
        <img slot="item-icon-active" src="~assets/img/ningmeng.png" alt="" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/TabBar";
import TabBarItem from "components/common/TabBarItem";
export default {
  name: "MainTabBar",
  props: [""],
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem,
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
</style>