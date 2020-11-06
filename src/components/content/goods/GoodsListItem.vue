<!--  -->
<template>
    <div class="goods" @click="itemClick">
       <img :src="goodsItem.cdn_img" alt=""
       @load="imageLoad">  
       <div class="goods-info">
           <p>{{goodsItem.text}}</p>
           <span class="price">{{goodsItem.love}}</span>
           <span class="collect">{{goodsItem.hate}}</span>
       </div>

    </div>
</template>

<script>
    export default {
        name:'GoodsListItem',
        props:{
            goodsItem: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        data () {
            return {

            };
        },
        components: {},
        computed: {},
        beforeMount() {},
        mounted() {},
        methods: {
          imageLoad(){
            // 调用scroll的refresh
            this.$bus.$emit('itemImageLoad')
          },
          itemClick(){
            console.log('跳转到详情页....');
            this.$router.push('/detail/' + '1m93p4u')
          }
        },
        watch: {}

    }
</script>
<style  scoped>
  .goods {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
    
  }
  .goods img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    background-color: #fff;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }
</style>