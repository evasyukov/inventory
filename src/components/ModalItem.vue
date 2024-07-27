<template>
  <div v-if="isVisible" class="modal-backdrop">
    <div class="modal">
      <!-- кнопка закрытия окна -->
      <div class="modal_close-button" @click="closeModal">
        <img src="../assets/close.svg" alt="" />
      </div>

      <!-- блок с предметом -->
      <div class="modal_item">
        <div class="first"><div class="second"></div></div>
      </div>

      <!-- блок с описанием -->
      <div class="modal_description">
        <div class="skeletons-main"></div>
        <div class="modal_description-skeletons_content">
          <div class="skeletons"></div>
          <div class="skeletons"></div>
          <div class="skeletons"></div>
          <div class="skeletons"></div>
          <div class="skeletons"></div>
        </div>
      </div>

      <!-- кнопка удалить предмет -->
      <div class="modal_delete">
        <div class="modal_delete-button">
          <span>Удалить предмет</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped lang="ts">
export default {
  props: ["isVisible"],
  methods: {
    closeModal() {
      this.$emit("close")
    },
  },
}
</script>

<style lang="scss">
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

.modal-backdrop {
  position: absolute;
  left: 650px;
  z-index: 1;

  height: 100%;
  overflow: hidden;
}

.modal {
  width: 400px;
  height: 95%;

  padding: 20px;
  border-radius: 0 12px 12px 0;
  border: 1px solid #4d4d4d;

  animation: 0s ease-out 0s 1 slideInFromRight;

  background-color: #2626268a;
  backdrop-filter: blur(16px);

  &_close-button {
    width: 100%;
    text-align: end;
    cursor: pointer;

    img {
      width: 16px;
      height: 16px;

      color: #fff;
    }
  }

  &_item {
    height: 300px;

    display: flex;
    justify-content: center;
    align-items: center;

    .first {
      width: 150px;
      height: 150px;

      background-color: rgba(170, 151, 101, 1);
    }

    .second {
      width: 150px;
      height: 150px;

      position: relative;
      bottom: 10px;
      left: 10px;

      z-index: 1;

      background-color: rgba(217, 187, 152, 0.721);
      backdrop-filter: blur(12px);
    }
  }

  &_description {
    height: 45%;

    padding: 0 5px;

    border-top: 1px solid #4d4d4d;
    border-bottom: 1px solid #4d4d4d;
    .skeletons-main {
      width: 100%;
      height: 40px;

      margin: auto;
      margin-top: 23px;

      border-radius: 12px;
      background: linear-gradient(
        90deg,
        #3c3c3c 0%,
        #444444 51.04%,
        #333333 100%
      );
    }
    &-skeletons_content {
      margin: 40px 0;
    }

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

    .skeletons:nth-child(4) {
      width: 85%;
    }
    .skeletons:nth-child(5) {
      width: 45%;
    }
  }

  &_delete {
    width: 100%;
    height: 40px;

    margin: 22px 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    // height: 50%;

    background-color: #fa7272;
    color: #fff;

    border-radius: 12px;
  }
}
</style>
