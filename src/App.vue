<template>
  <div class="inventory-menu">
    <div class="inventory-menu_main">
      <PersonMenu></PersonMenu>
    </div>
    <div class="inventory-menu_bottom"></div>
  </div>
</template>

<script lang="ts">
import BottomPanel from "./components/BottomPanel.vue"
import PersonMenu from "./components/PersonMenu.vue"
import Inventory from "./components/Inventory.vue"

export default {
  components: {
    BottomPanel,
    PersonMenu,
    Inventory,
  },
}
</script>

<style lang="scss"></style>
