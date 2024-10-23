<template>
  <div class="person-menu">
    <!-- Блок с аватаром -->
    <div class="person-menu_avatar">
      <img src="../assets/cat.jpg" alt="" />
    </div>

    <!-- Блок с текстом -->
    <div class="person-menu_description">
      <div v-for="text in 7" :key="text" class="skeletons"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.person-menu {
  width: 400px;
  height: 750px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;

  // блок с аватаром
  &_avatar {
    img {
      width: 300px;
      height: auto;

      border-radius: 20px;

      background-size: cover;
      background-position: center;

      filter: blur(4px);
    }
  }

  // блок с описанием
  &_description {
    width: 300px;
    height: 300px;

    padding: 18px;

    .skeletons {
      width: 100%;
      height: 18px;

      margin: auto;
      margin-bottom: 23px;

      border-radius: 12px;
      background: linear-gradient(
        90deg,
        #3c3c3c 0%,
        #444444 51.04%,
        #333333 100%
      );
    }
    .skeletons:nth-child(1) {
      height: 35px;
      margin-bottom: 35px;
    }
    .skeletons:nth-child(2) {
      width: 80%;
    }
    .skeletons:nth-child(4) {
      width: 90%;
    }
    .skeletons:nth-child(5) {
      width: 85%;
    }
    .skeletons:nth-child(6) {
      width: 70%;
      margin-bottom: 35px;
    }
    .skeletons:nth-child(7) {
      width: 40%;
    }
  }
}
</style>
