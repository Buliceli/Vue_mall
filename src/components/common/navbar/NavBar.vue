<!--  -->
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: [""],
  data() {
    return {};
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  top: 0;
  left: 0;
  right: 0; 
  line-height: 44px;
  height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100,100,100, 0.1);
}
.left {
  width: 60px;
  /* background-color: red; */
}
.center {
  flex: 1;
  /* background-color: aquamarine; */
}
.right {
  width: 60px;
  /* background-color: blue; */
}
</style>