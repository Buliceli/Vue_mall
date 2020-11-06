<!--  -->
<template>
  <div class="bottom">
    <div class="check-content">
      <check-button
        class="check-button"
        :isCheck="isSelectedAll"
        @click.native="checkClick"
      >
      </check-button>
      <span>全选</span>
    </div>
    <div class="heji">合计:¥ {{ totalPrice }}</div>
    <div class="calcute">去计算 {{ totalCount }}</div>
  </div>
</template>

<script>
import CheckButton from "components/content/CheckButton";
export default {
  name: "CartBottomBar",
  props: [""],
  data() {
    return {};
  },
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price.substr(1) * item.count;
        }, 0);
    },
    totalCount() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + 1;
        }, 0);
    },
    //
    isSelectedAll() {
      console.log(`呵呵🙄`);
      console.log(
        `${this.$store.state.cartList.filter((item) => !item.checked).length}`
      );
      return !this.$store.state.cartList.filter((item) => !item.checked).length;
    },
  },
  beforeMount() {},
  mounted() {},
  methods: {
    checkClick() {
      console.log(`全选按钮被点击`);
      if (this.isSelectedAll) {
        this.$store.state.cartList.forEach((element) => {
          element.checked = false;
        });
      } else {
          this.$store.state.cartList.forEach((element) => {
          element.checked = true;
        });
      }
    },
  },
  watch: {},
};
</script>

<style scoped>
.bottom {
  background-color: #eee;
  height: 49px;
  position: relative;
  display: flex;
  /* bottom: 49px; */
  /* line-height: 49px; */
}
.check-button {
  width: 20px;
  height: 20px;
  /* line-height: 20px; */
}
.check-content {
  padding-top: 15px;
  margin-left: 10px;
  display: flex;
  align-content: center;
  /* justify-content: center; */
  /* flex-direction: row; */
}
.heji {
  margin-top: 15px;
  margin-left: 15px;
}
.calcute {
  /* margin-top: 15px; */
  margin-right: 0;
  position: absolute;
  right: 0;
  background-color: red;
  height: 100%;
  line-height: 49px;
  color: white;
  width: 65px;
  text-align: center;
}
</style>