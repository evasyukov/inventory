<template>
  <div class="inventory-list">
    <div class="inventory-list_cell" v-for="n in 25" :key="n">
      <Item v-if="n < 4" />
    </div>
  </div>
</template>

<script lang="ts">
import Item from "./Item.vue"

export default {
  name: "InventoryList",

  components: {
    Item,
  },
}
</script>

<style lang="scss">
.inventory-list {
  width: 1090px;
  height: 100%;

  display: flex;
  flex-wrap: wrap;

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
