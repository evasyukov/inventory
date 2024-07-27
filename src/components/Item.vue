<template>
  <div class="item" @click="openModal">
    <div class="item_first"><div class="item_second"></div></div>
  </div>
</template>

<script lang="ts">
import ModalItem from "./ModalItem.vue"

export default {
  name: "Item",
  components: {
    ModalItem,
  },
  methods: {
    // метод открытия модального окна
    openModal() {
      this.$emit('open')
    },
  },
}
</script>

<style lang="scss">
.item {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &_first {
    width: 70px;
    height: 70px;

    background-color: rgba(170, 151, 101, 1);
  }

  &_second {
    width: 70px;
    height: 70px;

    position: relative;
    bottom: 10px;
    left: 10px;

    z-index: 1;

    background-color: rgba(217, 187, 152, 0.35);
    backdrop-filter: blur(12px);
  }
}
</style>
