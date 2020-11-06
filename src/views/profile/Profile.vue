<!--  -->
<template>
  <div>
    <div @click="test">我的</div>
    <img
      src="https://images.pexels.com/photos/3255550/pexels-photo-3255550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt=""
      @load="imgLoad"
    />
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: [""],
  data() {
    return {
      ldthemeTopYs: [],
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    imgLoad() {
      this.ldthemeTopYs = [];
      this.ldthemeTopYs.push(0);
      this.ldthemeTopYs.push(4169);
      this.ldthemeTopYs.push(4394);
      this.ldthemeTopYs.push(4595);
      console.log(this.ldthemeTopYs);
      console.log(this.ldthemeTopYs.length);
      console.log('玛丽隔壁')

      //  this.ldthemeTopYs = [1,2,3];
      // console.log(this.ldthemeTopYs.lenght);
      // console.log('玛丽隔壁')
      // console.log(this.ldthemeTopYs.count)
      // console.log('*********');
    },
    test() {},
  },
  watch: {},
};
</script>

<style scoped>
</style>