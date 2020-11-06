<!--  -->
<template>
  <div id="detail">
    <!-- 导航 -->
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="scroll" ref="scroll" :probe-type="3" @scroll="scrollEvent">
      <ul>
        <li v-for="item in $store.state.cartList">
          {{item}}
        </li>
      </ul>
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-parm-view ref="parm"></detail-parm-view>
      <detail-comment-info
        :commentInfo="detailInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list :goods="goods2" ref="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar
      @addToCart="addCartll"
      class="bottom-bar"
    ></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBack"></back-top>
  </div>
</template>

<script>
import detailNavBar from "views/detail/childComponents/detailNavBar";
import detailSwiper from "views/detail/childComponents/detailSwiper";
import DetailBaseInfo from "views/detail/DetailBaseInfo";
import DetailShopInfo from "views/detail/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailCommentInfo from "views/detail/DetailCommentInfo";
import DetailGoodsInfo from "views/detail/DetailGoodsInfo";
import DetailParmView from "views/detail/DetailParmView";
import GoodsList from "components/content/goods/GoodsList";
import detailBottomBar from "views/detail/childComponents/detailBottomBar.vue";

import { getDetail, Goods, Shop } from "network/detail.js";
import { debounce } from "components/common/utils.js";
import { itemListerMixin, backTopMixin } from "components/common/mixin.js";

import {mapActions} from 'vuex'
export default {
  name: "Detail",
  props: [""],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      itemInfo: {
        title:
          "[中柏美]2018春秋季新款原宿风长袖T恤女bf潮学生韩版拼接白色复古港味",
        desc: "新款上市~",
        price: "",
        oldPrice: "¥38.50",
        discountDesc: "¥69.00",
        lowNowPrice: "38.50",
      },
      columns: ["销量 1580", "收藏33人", "默认快递"],
      services: [],
      shop: {},
      detailInfo: {},
      goods2: [
        {
          cdn_img:
            "https://images.pexels.com/photos/2617548/pexels-photo-2617548.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=50",
          love: "88",
          hate: "99",
          text: "hh",
        },
        {
          cdn_img:
            "https://images.pexels.com/photos/2617548/pexels-photo-2617548.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=50",
          love: "88",
          hate: "99",
          text: "hh",
        },
        {
          cdn_img:
            "https://images.pexels.com/photos/2617548/pexels-photo-2617548.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=50",
          love: "88",
          hate: "99",
          text: "hh",
        },
        {
          cdn_img:
            "https://images.pexels.com/photos/2617548/pexels-photo-2617548.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=50",
          love: "88",
          hate: "99",
          text: "hh",
        },
        {
          cdn_img:
            "https://images.pexels.com/photos/2617548/pexels-photo-2617548.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=50",
          love: "88",
          hate: "99",
          text: "hh",
        },
        {
          cdn_img:
            "https://images.pexels.com/photos/2617548/pexels-photo-2617548.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=50",
          love: "88",
          hate: "99",
          text: "hh",
        },
        {
          cdn_img:
            "https://images.pexels.com/photos/2617548/pexels-photo-2617548.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=50",
          love: "88",
          hate: "99",
          text: "hh",
        },
        {
          cdn_img:
            "https://images.pexels.com/photos/2617548/pexels-photo-2617548.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=50",
          love: "88",
          hate: "99",
          text: "hh",
        },
      ],
      ldthemeTopYs: [],
      currentIndex: 0,
    };
  },
  created() {
    //   保存传入的iid
    this.iid = this.$route.params.id;
    //   根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      //1 . 获取顶部的图片轮播数据
      (this.topImages = [
        "http://wimg.spriteapp.cn/picture/2020/0925/26903a86-fef2-11ea-8b76-1866daeb0df0_wpd.jpg",
        "http://wimg.spriteapp.cn/picture/2020/0828/f640292e-e90f-11ea-91e2-1866daeb0df0_wpd.jpg",
        "http://wimg.spriteapp.cn/picture/2020/0827/918f50da-e848-11ea-9dd5-1866daeb0df0_wpd.jpg",
        "http://wimg.spriteapp.cn/picture/2020/0515/5ebe3e0ac6eaf_wpd.jpg",
      ]),
        //2. 获取商品信息
        (this.goods = new Goods(this.itemInfo, this.columns)),
        //3. 创建店铺信息
        (this.shop = new Shop({
          name: "中国美",
          cSells: 57876,
          cGoods: 99,
          cFans: 17145,
          score: [
            { isBetter: false, name: "描述相符", score: 4.64 },
            { isBetter: false, name: "描述相符", score: 4.65 },
            { isBetter: false, name: "描述相符", score: 4.66 },
          ],
          logo:
            "https://images.pexels.com/users/avatars/3088726/tima-miroshnichenko-666.jpeg?w=256&h=256&fit=crop&auto=compress",
        }));
      //4. 保存商品的详情数据
      this.detailInfo = {
        desc: "新款上市",
        detailImage: [
          {
            desc: "穿着效果",
            images: [
              `https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`,
              `https://images.pexels.com/photos/769659/pexels-photo-769659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
              `https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`,
              `https://images.pexels.com/photos/1030901/pexels-photo-1030901.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`,
              `https://images.pexels.com/photos/3914167/pexels-photo-3914167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`,
            ],
          },
        ],
      };

      // this.$nextTick(() => {
      //   // dom渲染完毕  图片没加载完毕
      //   // this.themeTopYs = []
      //   // this.themeTopYs.push(0)
      //   // this.themeTopYs.push(this.$refs.parm.$el.offsetTop)
      //   // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      //   // this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
      //   // console.log(this.themeTopYs)
      // });
    });
  },
  components: {
    detailNavBar,
    detailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailCommentInfo,
    DetailGoodsInfo,
    DetailParmView,
    GoodsList,
    detailBottomBar,
  },
  computed: {},
  beforeMount() {},
  mixins: [itemListerMixin, backTopMixin],
  mounted() {},
  methods: {
    ...mapActions(['addCart']),
    imageLoad() {
      //  this.ldthemeTopYs = ['1','2','3'];
      // console.log(this.ldthemeTopYs.lenght);
      // console.log('玛丽隔壁')
      // console.log(this.ldthemeTopYs.count)
      // console.log('*********');

      this.$refs.scroll.scroll.refresh();

      this.ldthemeTopYs = [];
      this.ldthemeTopYs.push(0);
      this.ldthemeTopYs.push(this.$refs.parm.$el.offsetTop - 45);
      this.ldthemeTopYs.push(this.$refs.comment.$el.offsetTop - 45);
      this.ldthemeTopYs.push(this.$refs.recommends.$el.offsetTop - 45);

      this.ldthemeTopYs.push(Number.MAX_VALUE);
      // this.ldthemeTopYs.push(4169);
      // this.ldthemeTopYs.push(4394);
      // this.ldthemeTopYs.push(4595);

      console.log(this.ldthemeTopYs);
      //lenght
      console.log(this.ldthemeTopYs.length);
      console.log("玛丽隔壁");
      console.log("*********");
      console.log(this.ldthemeTopYs);
    },
    test() {
      var obj = new Object();
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.ldthemeTopYs[index], 100);
    },
    scrollEvent(res) {
      //console.log(res);
      const positoinY = -res.y;
      let lenght = this.ldthemeTopYs.length;
      // console.log(Object.prototype.toString.call(this.ldthemeTopYs))
      // console.log(this.ldthemeTopYs.length)
      // console.log(Array.isArray(this.ldthemeTopYs))
      for (let i = 0; i < lenght - 1; i++) {
        //   if (
        //     this.currentIndex != i && ((i < lenght - 1 &&
        //       positoinY >= this.ldthemeTopYs[i] &&
        //       positoinY < this.ldthemeTopYs[i + 1]) ||
        //     (i === lenght - 1 && positoinY >= this.ldthemeTopYs[i])
        //   )) {
        //     console.log(`获取到的正确的i值 = ${i}`);
        //     this.currentIndex = i
        //     this.$refs.nav.currentIndex = this.currentIndex
        //   }

        if (
          this.currentIndex != i &&
          positoinY >= this.ldthemeTopYs[i] &&
          positoinY < this.ldthemeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      //  this.listenShowBackTop(res)
      this.isShowBack = -res.y > 1000;
    },
    addCartll() {
      // console.log(`添加到购物车`);
      // 1. 获取商品信息
      const product = {}
      product.img = this.topImages[0]
      product.title = this.itemInfo.title
      product.desc = this.itemInfo.desc
      product.price = this.itemInfo.discountDesc
      product.iid = this.iid

      //2. 将商品添加到购物车
      // this.$store.commit('addCart',product)
      //  this.$store.dispatch('addCart',product)
      //  .then((res)=>{
      //    console.log(res)
      //  })
      this.addCart(product).then((res)=>{
        console.log(res)
        this.$toast.show(res,2000)
      })


    },
  },
  watch: {},
  destroyed() {
    console.log(`必须得是 fei keep-alive的才行...`);
    this.$bus.$off("itemImageLoad", this.homeItemLister);
  },
  updated() {},
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;

  /* 父元素要有固定的高度 不能随内容的高度哦 */
  height: 100vh;
}
.scroll {
  overflow: hidden;
  height: calc(100% - 5.8125rem);
}
.bottom-bar {
  /* height: 3.0625rem;
  /* position: fixed;
  left: 0;
  right: 0;
  background-color: red;
  bottom: 0; */

  /* position: relative;
  bottom: 3.0625rem;
  background-color: red; */
}
</style>