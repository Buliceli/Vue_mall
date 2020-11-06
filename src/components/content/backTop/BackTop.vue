<!--  -->
<template>
  <div class="back-top">
    <img src="~assets/img/shang-.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  props: [""],
  data() {
    return {};
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
      
  },
  watch: {},
};
</script>

<style  scoped>
.back-top {
  width: 70px;
  height: 70px;
  position: fixed;
  right: 10px;
  bottom: 60px;
  /* background-color: red; */
  text-align: center;
}
.back-top img {
  width: 43px;
  height: 43px;
}
</style>