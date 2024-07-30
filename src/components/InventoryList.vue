<template>
  <div class="inventory-list">
    <!-- ячейка предмета -->

    <div
      class="inventory-list_cell"
      v-for="cell in allCells"
      :key="cell.position"
      @dragover.prevent
      @dragenter.prevent
    >
      <Item
        class="item_block"
        ref="itemRefs"
        draggable="true"
        v-if="cell.item"
        :item="cell.item"
        @open="openModal(cell.item)"
      />

      <div v-else></div>
    </div>

    <ModalItem
      :delete-item="handleDeleteItem"
      :selected-item="selectedItem"
      :visible_modal="showModal"
      @close="closeModal"
    />
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted, nextTick } from "vue"
import { Draggable } from "@shopify/draggable"

import Item from "./Item.vue"
import ModalItem from "./ModalItem.vue"
import { useStoreItems } from "../stores/storeItems.ts"

interface Cell {
  position: number
  item?: any
}

export default {
  name: "InventoryList",
  components: {
    Item,
    ModalItem,
  },
  setup() {
    const itemRefs = ref([])
    const storeItems = useStoreItems() // стор
    const items = computed(() => storeItems.items) // массив items

    // отрисовка всех ячеек
    const allCells = computed<Cell[]>(() => {
      const cells: Cell[] = []

      for (let i = 1; i <= 25; i++) {
        const cell = { position: i }
        const item = items.value.find((item) => item.id === i)
        if (item) {
          // @ts-ignore
          cell.item = item
        }
        cells.push(cell)
      }
      return cells
    })

    const selectedItem: any = ref(null) // выбранная ячейка
    const showModal = ref(false) // состояние модального окна ячейки

    // открытие модального окна и передача item в него
    const openModal = (item: Object) => {
      showModal.value = true
      selectedItem.value = item
    }
    // закрытие модального окна
    const closeModal = () => {
      showModal.value = false
    }

    // удаление предмета
    const handleDeleteItem = ({ itemId, newCount, }: { itemId: number, newCount: number }) => {
      storeItems.deleteItemInventory(itemId, newCount)
      localStorage.setItem("items", JSON.stringify(items.value))
    }

    let draggableElements

    onMounted(async () => {
      await nextTick()

      // drag drop
      draggableElements = document.querySelectorAll(".item_block")
      if (itemRefs.value.length > 0) {
        new Draggable(itemRefs.value, {
          // @ts-ignore
          group: ".inventory-list_cell",
          animationDuration: 150,
          onStart(event: DragEvent) {
            console.log("Перетаскивание начато", event)
          },
          onEnd(event: DragEvent) {
            console.log("Перетаскивание закончено", event)
          },
        })
      }
    })

    return {
      draggableElements,
      items,
      showModal,
      selectedItem,
      allCells,
      openModal,
      closeModal,
      handleDeleteItem,
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
