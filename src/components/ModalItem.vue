<template>
  <div v-if="visible_modal && selectedItem.counter > 0" class="modal-backdrop">
    <div class="modal">


      <!-- блок с предметом -->
      <div class="modal_item">
        <div
          class="item_first"
          :style="{ backgroundColor: selectedItem.color_first }"
        >
          <div
            class="item_second"
            :style="{ backgroundColor: selectedItem.color_second }"
          ></div>
        </div>
      </div>

      <!-- блок с описанием -->
      <div class="modal_description">
        <div class="skeletons-main"></div>
        <div class="modal_description-skeletons_content">
          <div class="skeletons" v-for="text in 5" :key="text"></div>
        </div>
      </div>

      <!-- кнопка удалить предмет -->
      <div class="modal_delete" @click="deleteBlock">
        <span>Удалить предмет</span>
      </div>

      <!-- блок удаления предмета -->
      <div class="delete-block" v-if="showDeleteBlock">
        <div class="delete-block_counter">
          <input
            required
            id="counter_item"
            type="number"
            placeholder="Введите количество"
            min="0"
          />
        </div>

        <div class="delete-block_button">
          <button class="delete-block_button-undo" @click="deleteBlock">
            Отмена
          </button>
          <button class="delete-block_button-delete" @click="deleteItem">
            Потвердить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  visible_modal: Boolean,                                           // открытие модального окна
  selectedItem: { type: Object, default: null },                    // выбранный предмет
})




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
  top: 0px;
  z-index: 1;

  height: 100%;
  overflow: hidden;
}

.modal {
  width: 400px;
  height: 95%;
  position: relative;

  padding: 20px;
  border-radius: 0 12px 12px 0;
  border: 1px solid #4d4d4d;

  animation: 0.7s ease-out 0s 1 slideInFromRight;

  background-color: #262626;
  // backdrop-filter: blur(16px);

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
    height: 280px;

    display: flex;
    justify-content: center;
    align-items: center;

    .item_first {
      width: 150px;
      height: 150px;
    }

    .item_second {
      width: 150px;
      height: 150px;

      position: relative;
      bottom: 20px;
      left: 20px;

      z-index: 1;

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

    border-radius: 12px;
    margin: 27px 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fa7272;
    color: #fff;

    cursor: pointer;
    user-select: none;
  }

  .delete-block {
    width: 100%;
    height: 200px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    position: absolute;
    bottom: 4px;
    right: -1px;

    background-color: #262626;
    border: 1px solid #4d4d4d;

    border-radius: 0 0 12px 0;

    &_counter {
      input {
        width: 350px;
        height: 60px;

        font-size: 24px;

        background-color: transparent;
        color: #fff;

        border: 1px solid #4d4d4d;
        border-radius: 5px;

        outline: none;
      }
    }

    &_button {
      width: 100%;

      display: flex;
      justify-content: center;
      gap: 20px;

      button {
        width: 168px;
        height: 40px;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 20px;

        border: none;
        border-radius: 12px;
        cursor: pointer;

        box-shadow: 0px 0px 20px 3px #fa7272;
      }

      &-undo {
        background-color: #fff;
        color: #000;
      }
      &-delete {
        background-color: #fa7272;
        color: #fff;
      }
    }
  }
}
</style>
