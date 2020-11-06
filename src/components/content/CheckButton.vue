<!--  -->
<template>
  <div class="check-button" :class="{ checkbtn: isCheck }">
    <img src="~assets/img/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isCheck: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
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
.check-button {
  border-radius: 50%;
  border: 2px solid #aaa;
}
.checkbtn {
  background-color: red;
  border-color: red;
 
}
</style>