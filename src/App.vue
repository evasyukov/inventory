<template>
  <div class="inventory-menu">
    <!-- Основной контент страницы -->
    <div class="inventory-menu_main">
      <!-- Блок "персонажа" -->
      <PersonMenu />

      <!-- Инвентарь -->
      <InventoryList />
    </div>

    <!-- Нижняя панель -->
    <div class="inventory-menu_bottom"></div>
  </div>
</template>

<script setup>
import PersonMenu from "./components/PersonMenu.vue"
import InventoryList from "./components/InventoryList.vue"
</script>

<style lang="scss" scoped>
.inventory-menu {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 950px;

  &_main {
    height: 100%;
    display: flex;

    gap: 24px;

    margin: 0 32px;
    margin-top: 32px;
  }
}
</style>
