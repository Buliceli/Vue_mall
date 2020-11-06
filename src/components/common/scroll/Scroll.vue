<!--  -->
<template>
  <!-- ref--children -->
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      defalut: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click:true
    });
    // 监听滚动的位置
    this.scroll.on("scroll", (postion) => {
      // console.log(`什么鬼 --- >${postion}`);
      this.$emit("scroll", postion);
    });
    //监听上拉事件
    this.scroll.on("pullingUp", () => {
      // console.log("上拉加载更多......");
       this.$emit('pullingUp')
      
    });
    console.log(this.scroll)
  },
  methods: {
    scrollTo(x, y, time = 300) {
     this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh(){
      this.scroll && this.scroll.refresh()
      // console.log('图片加载完毕----')
    }
  },
  watch: {},
};
</script>

<style scoped>
</style>