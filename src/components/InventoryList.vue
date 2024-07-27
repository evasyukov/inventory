<template>
  <div class="inventory-list">
    <div class="inventory-list_cell" v-for="n in 25" :key="n">
      <Item @open="openModal" v-if="n < 4" />
    </div>

    <ModalItem :visible_modal="showModal" @close="closeModal" />
  </div>
</template>

<script lang="ts">
import Item from "./Item.vue"
import ModalItem from "./ModalItem.vue"

export default {
  name: "InventoryList",

  components: {
    Item,
    ModalItem,
  },
  data() {
    return {
      showModal: true,
    }
  },
  methods: {
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
  },
}
</script>

<style lang="scss">
.inventory-list {
  width: 1090px;
  height: 100%;

  display: flex;
  flex-wrap: wrap;

  position: relative;

  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 20px;

  &_cell {
    width: 200px;
    height: 147px;

    border: 1px solid #4d4d4d;

    flex: 1 0 auto;
  }
}
</style>
