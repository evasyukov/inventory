<template>
  <div class="item" @click="openModal">
    <!-- :style="{ backgroundColor: item.color_first }" -->
    <div class="item_first" :style="{ backgroundColor: item.color_first }">

      <!-- :style="{ backgroundColor: item.color_second }" -->
      <div class="item_second" :style="{ backgroundColor: item.color_second }"></div>
    </div>
    <!-- {{ item.counter }} -->
    <div class="item_counter">{{ item.counter }}</div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import { defineProps } from "vue"
import ModalItem from "./ModalItem.vue"

export default {
  name: "Item",
  components: {
    ModalItem,
  },
  props: {
    item: Object,
  },
  setup(_, { emit }) {
    const openModal = () => {
      emit("open")
    }

    return {
      openModal,
    }
  },
}
</script>

<style lang="scss">
.item {
  width: 100%;
  height: 100%;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &_counter {
    width: 24px;
    height: 24px;

    border: 1px solid #4d4d4d;
    border-radius: 12px 0 0 0;

    position: absolute;
    bottom: 0;
    right: 0;

    font-size: 12px;
    color: #ffffff40;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &_first {
    width: 70px;
    height: 70px;

    // background-color: #aa9765;
  }

  &_second {
    width: 70px;
    height: 70px;

    position: relative;
    bottom: 10px;
    left: 10px;

    z-index: 1;

    // background-color: #d9bb985a;
    backdrop-filter: blur(12px);
  }
}
</style>
