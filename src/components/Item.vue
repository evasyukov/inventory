<template>
  <div class="item" @click="openModal(item)" v-if="item.counter > 0">

    <div class="item_first" :style="{ backgroundColor: item.color_first }">
      <div
        class="item_second"
        :style="{ backgroundColor: item.color_second }"
      ></div>
    </div>

    <div class="item_counter" >{{ item.counter }}</div>
  </div>
</template>

<script lang="ts">
import ModalItem from "./ModalItem.vue"

export default {
  name: "Item",
  components: {
    ModalItem,
  },
  props: {
    item: { type: Object, default: Array },
  },
  setup(_, { emit }) {
    const openModal = (item: any) => {
      emit("open", item)
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
