<template>
  <div class="bottom-panel">
    <div class="skeletons"></div>
    <div class="close-button">
      <img src="../assets/close.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "BottomPanel",
}
</script>

<style lang="scss">
.bottom-panel {
  width: 1500px;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 20px;
  gap: 20px;

  .skeletons {
    width: 90%;
    height: 50%;

    border-radius: 20px;
    background: linear-gradient(
      90deg,
      #3c3c3c 0%,
      #444444 51.04%,
      #333333 100%
    );
  }

  .close-button {
    position: relative;
    bottom: 40px;
    left: 47px;

    cursor: pointer;

    img {
      width: 16px;
      height: 16px;

      color: #fff;
    }
  }
}
</style>
