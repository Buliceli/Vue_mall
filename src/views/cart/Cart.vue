<!--  -->
<template>
    <div class="cart">
        <nav-bar class="nav">
            <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>
        <!-- 商品的列表 -->
        <cart-list>

        </cart-list>
        <!-- 底部汇总 -->
        <cart-bottom-bar>

        </cart-bottom-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar.vue'
import {mapGetters} from 'vuex'

    export default {
        name:'Cart',
        props:[''],
        data () {
            return {

            };
        },
        components: {
            NavBar,
            CartList,
            CartBottomBar
        },
        computed: {

            ...mapGetters(['cartLength','cartList'])
        },
        beforeMount() {},
        mounted() {},
        methods: {},
        watch: {}

    }

</script>

<style  scoped>
.cart {
    height: 100vh;
    width: 100%;
}
.nav {
    background-color: var(--color-tint);
    color: white;
    font-weight: 700;
}
</style>