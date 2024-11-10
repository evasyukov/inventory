<template>
  <div v-if="visible_modal && selectedItem.counter > 0" class="modal-backdrop">
    <div class="modal">
      <!-- кнопка закрытия окна -->
      <div class="modal_close-button" @click="closeModal">
        <img src="../assets/close.svg" alt="закрыть окно предмета" />
      </div>

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
      <div class="modal_delete" @click="showDeleteBlock = true">
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
          <button class="delete-block_button-delete" @click="deleteItem">
            Потвердить
          </button>
          <button
            class="delete-block_button-undo"
            @click="showDeleteBlock = false"
          >
            Отмена
          </button>
        </div>
      </div>

      <!-- ------ -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useStoreItems } from "../store/storeItems.js"

const storeItems = useStoreItems() // стор

const props = defineProps({
  visible_modal: Boolean,
  selectedItem: { type: Object, default: null },
  deleteItem: { type: Function, default: null },
})
const showDeleteBlock = ref(false)
const item = ref(props.selectedItem)
const emit = defineEmits(["close"])

// закрытие модального окна предмета
const closeModal = () => {
  showDeleteBlock.value = false
  emit("close")
}

console.log(item, "-----------------------")
const deleteItem = () => {
  let inputCount = document.getElementById("counter_item")?.value
  const newCount = props.selectedItem.counter - inputCount

  if (inputCount > 0) {
    props.deleteItem({
      itemId: props.selectedItem.id,
      newCount: newCount,
    })
  }

  showDeleteBlock.value = false
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
  height: 800px;
  right: 0px;
  top: 0px;
  z-index: 1;
  overflow: hidden;
}

.modal {
  width: 400px;
  height: 719px;

  box-shadow: 1px 1px 20px 3px #262626;
  padding: 20px;
  border-radius: 0 12px 12px 0;
  border: 1px solid #4d4d4d;

  animation: 0.7s ease-out 0s 1 slideInFromRight;

  background-color: #262626;

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
    width: 440px;
    height: 170px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    position: absolute;
    bottom: 40px;
    right: 0px;

    background-color: #262626;
    border: 1px solid #4d4d4d;

    border-radius: 0 0 12px 0;

    &_counter {
      input {
        width: 350px;
        height: 50px;

        font-size: 20px;

        background-color: transparent;
        color: #fff;

        border: 1px solid #4d4d4d;
        border-radius: 5px;

        outline: none;

        &::-webkit-inner-spin-button  {
          -webkit-appearance: none;
        }
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
      }

      &-undo {
        background-color: #818181;
        color: #000;
      }
      &-delete {
        background-color: #fff;
        color: #000;
      }
    }
  }
}
</style>
