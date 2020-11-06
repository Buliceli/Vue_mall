<!--  -->
<template>
  <div>
    <nav-bar>
        <div slot="left" class="back"
        @click="backClick">
            <img src="~assets/img/Active.png" alt="">
        </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          class="title-item"
          :class="{ isActive: index === currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "detailNavBar",
  props: [""],
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: { NavBar },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index)
    },
    backClick(){
        this.$router.back();
    }
  },
  watch: {},
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.isActive {
  color: var(--color-high-text);
}
.back img {
    width: 60%;
    margin-top: 5px;
}
</style>