<template>
  <div class="inventory-list">
    <!-- ячейка предмета -->
    <div
      class="inventory-list_cell"
      v-for="(item, index) in extendedItems"
      :key="index"
    >
      <Item :item="item" @open="openModal" />
    </div>

    <ModalItem :visible_modal="showModal" @close="closeModal" />
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue"

import Item from "./Item.vue"
import ModalItem from "./ModalItem.vue"
import { useStoreItems } from "../stores/storeItems.ts"

export default {
  name: "InventoryList",
  components: {
    Item,
    ModalItem,
  },
  setup() {
    const storeItems = useStoreItems()
    const items = computed(() => storeItems.items)

    const extendedItems = computed(() => {
      let extended = [...items.value]
      while (extended.length < 25) {
        extended.push()
      }
      return extended;
    })

    const showModal = ref(false)

    const openModal = () => {
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
    }

    return {
      extendedItems,
      items,
      showModal,
      openModal,
      closeModal,
    }
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

  &_counter {
    width: 16px;
    height: 16px;

    border: 1px solid #4d4d4d;
    border-radius: 12px 0 0 0;

    position: absolute;
    bottom: 0;
    left: 2px;
  }
}
</style>
