<template>
  <div class="inventory-list">
    <!-- ячейка предмета -->
    <div
      class="inventory-list_cell"
      v-for="cell in allCells"
      :key="cell.position"
    >
      <Item
        v-if="cell.item"
        :key="cell.item.id"
        :item="cell.item"
        @open="openModal(cell.item)"
      />

      <div v-else></div>
    </div>

    <!-- модальное окно -->
    <ModalItem :visible_modal="showModal" :selected-item="selectedItem" />
  </div>
</template>

<script setup>
// vue
import { ref, computed } from "vue"

// компоненты
import Item from "./Item.vue"
import ModalItem from "./ModalItem.vue"

// store
import { useStoreItems } from "../store/storeItems"

const storeItems = useStoreItems() // store
const items = computed(() => storeItems.items) // array предметов

const allCells = computed(() => {
  const cells = []

  for (let i = 1; i <= 25; i++) {
    const cell = { position: i }
    const item = items.value.find((item) => item.id === i)
    if (item) {
      cell.position = item.id
      cell.item = item
    }
    cells.push(cell)
  }

  return cells
})

// переменные для модального окна
const selectedItem = ref(null) // выбранная ячейка
const showModal = ref(false) // состояние модального окна ячейки

// открытие модального окна и передача item в него
const openModal = (item) => {
  showModal.value = true
  selectedItem.value = item
}
</script>

<style lang="scss" scoped>
.inventory-list {
  width: 1090px;
  height: 750px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0px;

  position: relative;
  border-radius: 20px;

  &_cell {
    width: 210px;
    height: 150px;
    background: #262626;
    border: 1px solid #4d4d4d;
  }

  &_cell:nth-child(1) {
    border-radius: 20px 0 0;
  }
  &_cell:nth-child(5) {
    border-radius: 0 20px 0 0;
  }
  &_cell:nth-child(21) {
    border-radius: 0 0 0 20px;
  }
  &_cell:nth-child(25) {
    border-radius: 0 0 20px 0;
  }
}
</style>
