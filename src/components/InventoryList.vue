<template>
  <div class="inventory-list">
    <!-- ячейка предмета -->
    <div v-for="item in 25" :key="item" class="inventory-list_cell"></div>
  </div>
</template>

<script setup></script>

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
