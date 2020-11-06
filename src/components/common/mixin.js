// 混入
import { debounce } from "components/common/utils.js";
import BackTop from "components/content/backTop/BackTop";
export const itemListerMixin = {
    data() {
        return {
            homeItemLister: null
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 500);
        this.homeItemLister = () => {
            // 执行频率height
            refresh();
        };
        this.$bus.$on("itemImageLoad", this.homeItemLister);
        console.log(`混入中的内容....呵呵呵`)
    },
}
export const backTopMixin = {
    components: {
        BackTop,
    },
    data() {
        return {
            isShowBack: false
        }
    },
    methods: {
        backClick() {
            console.log("9999");
            this.$refs.scroll.scrollTo(0, 0, 500);
        },
        // listenShowBackTop(postion){
        //     this.isShowBack = -postion.y > 1000;
        // }
    },
}