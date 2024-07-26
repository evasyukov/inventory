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
    <div class="inventory-menu_bottom">
      <BottomPanel />
    </div>
  </div>
</template>

<script lang="ts">
import BottomPanel from "./components/BottomPanel.vue"
import PersonMenu from "./components/PersonMenu.vue"
import InventoryList from "./components/InventoryList.vue"

export default {
  components: {
    BottomPanel,
    PersonMenu,
    InventoryList,
  },
}
</script>

<style lang="scss">
.inventory-menu {
  display: flex;
  flex-direction: column;
  // justify-content: center;
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

  &_bottom {
    margin: 32px;
    // height: 100%;
  }
}
</style>
