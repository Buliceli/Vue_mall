<!--  -->
<template>
  <div class="cart-list">
    <scroll class="content" ref="scrol">
      <div>
        <cart-list-item
          class="test"
          v-for="(item, inex) in cartList"
          :itemInfo="item"
          key="index"
        >
          {{ item }}
        </cart-list-item>
        <li>GGGGGG1</li>
        <li>GGGGGG2</li>
        <li>GGGGGG3</li>
        <li>GGGGGG4</li>
        <li>GGGGGG5</li>
        <li>GGGGGG6</li>
        <li>GGGGGG7</li>
        <li>GGGGGG8</li>
        <li>GGGGGG9</li>
        <li>GGGGGG10</li>
        <li>GGGGGG11</li>
        <li>GGGGGG12</li>
        <li>GGGGGG13</li>
        <li>GGGGGG14</li>
        <li>GGGGGG15</li>
        <li>GGGGGG16</li>
        <li>GGGGGG17</li>
        <li>GGGGGG18</li>
        <li>GGGGGG19</li>
        <li>GGGGGG20</li>
        <li>GGGGGG21</li>
        <li>GGGGGG22</li>
        <li>GGGGGG23</li>
        <li>GGGGGG24</li>
        <li>GGGGGG25</li>
        <li>GGGGGG26</li>
        <li>GGGGGG27</li>
        <li>GGGGGG28</li>
        <li>GGGGGG29</li>
        <li>GGGGGG30</li>
        <li>GGGGGG31</li>
        <li>GGGGGG32</li>
        <li>GGGGGG33</li>
        <li>GGGGGG34</li>
        <li>GGGGGG35</li>
        <li>GGGGGG36</li>
        <li>GGGGGG37</li>
        <li>GGGGGG38</li>
        <li>GGGGGG39</li>
        <li>GGGGGG40</li>
        <li>GGGGGG41</li>
        <li>GGGGGG42</li>
        <li>GGGGGG43</li>
        <li>GGGGGG44</li>
        <li>GGGGGG45</li>
      </div>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";
export default {
  name: "CartList",
  props: [""],
  data() {
    return {};
  },
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {},
  activated() {
      this.$refs.scrol.scroll.refresh()
  },
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 98px);
  /* background-color: yellow; */
}

.content {
  overflow: hidden;
  height: 100%;
}
</style>