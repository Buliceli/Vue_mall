<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabclick="tabclick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <recommend-view :recommends="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBack"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "views/home/childComps/HomeSwiper";
import RecommendView from "views/home/childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

import { getHomeMutidata, getBottomData } from "network/home";
import { debounce } from "components/common/utils.js";
import {itemListerMixin,backTopMixin} from 'components/common/mixin.js'

export default {
  name: "Home",
  props: [""],
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY:0,
      // homeItemLister: null
    };
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
    Scroll,

    NavBar,
    TabControl,
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  beforeMount() {},
  mixins: [itemListerMixin,backTopMixin],
  mounted() {
   
  },
  methods: {
    /**
     * 事件监听相关
     */
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "news";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(postion) {
      // self.listenShowBackTop(postion)
      this.isShowBack = -postion.y > 1000;
      this.isTabFixed = -postion.y > this.tabOffsetTop;
    },
    
    loadMore() {
      console.log("上拉加载");
      if (this.currentType == "pop") {
        this.getBottomData("pop", 1);
      } else if (this.currentType == "news") {
        this.getBottomData("news", 41);
      } else {
        this.getBottomData("sell", 10);
      }
    },
    swiperImageLoad() {
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    /**
     *  网络请求相关
     */
    getHomeMutidata() {
      getHomeMutidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getBottomData(type1, type2) {
      const page = this.goods[type1].page + 1;
      console.log(`最新的page = ${page}`);
      if (type1 === "pop") {
        getBottomData(1).then((res) => {
          this.goods[type1].list.push(...res.list);
          this.goods[type1].page = page;
          this.$refs.scroll.scroll.finishPullUp();
        });
      } else if (type1 === "news") {
        getBottomData(41).then((res) => {
          this.goods[type1].list.push(...res.list);
          this.goods[type1].page = page;
          this.$refs.scroll.scroll.finishPullUp();
        });
      } else {
        getBottomData(10).then((res) => {
          this.goods[type1].list.push(...res.list);
          this.goods[type1].page = page;
          this.$refs.scroll.scroll.finishPullUp();
        });
      }
    },
  },
  watch: {},
  created() {
    // 这里有this
    this.getHomeMutidata();
    this.getBottomData("pop", 1);
    this.getBottomData("news", 41);
    this.getBottomData("sell", 10);
  },
  activated() {
  this.$refs.scroll.scrollTo(0,this.saveY,0);
  this.$refs.scroll.refresh();
  },
  deactivated() {
     this.saveY = this.$refs.scroll.scroll.y;
     //页面离开的时候 就不要监听图片加载完成的事件了
     this.$bus.$off('itemImageLoad',this.homeItemLister);
  },
};
</script>

<style  scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  /* position: relative; */
}
.home-nav {
  background-color: var(--color-tint);
  color: aliceblue;
  height: 44px;
  /* position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9; */
}
/* .tab-control { */
/* position: sticky; */
/* top: 44px;
  z-index: 999; */
/* } */
.content {
  overflow: hidden;
  /* height: 405px; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: #fff;
}
.tab-control {
  position: relative;
  z-index: 9;
}
</style>