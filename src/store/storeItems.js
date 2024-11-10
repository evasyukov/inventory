import { defineStore } from "pinia"

export const useStoreItems = defineStore("storeItems", {
  state: () => ({
    items: [
      {
        id: 1,
        counter: 4,
        color_first: "#AA9765",
        color_second: "rgba(217, 187, 152, 0.35)",
      },
      {
        id: 2,
        counter: 2,
        color_first: "#7FAA65",
        color_second: "rgb(184 217 152 / 35%)",
      },
      {
        id: 3,
        counter: 5,
        color_first: "#656CAA",
        color_second: "rgb(116 129 237 / 35%)",
      },
      {
        id: 4,
        counter: 9,
        color_first: "#AA6965",
        color_second: "rgb(149 72 72 / 33%)",
      },
      {
        id: 5,
        counter: 7,
        color_first: "#656CAA",
        color_second: "rgb(116 129 237 / 35%)",
      },
      {
        id: 6,
        counter: 15,
        color_first: "#659EAA",
        color_second: "rgb(72 135 149 / 34%)",
      },
    ],
  }),
  actions: {
    // удаление предмета
    deleteItemInventory(itemId, newCount) {
      const itemIndex = this.items.findIndex((item) => item.id === itemId)
      if (itemIndex !== -1 && newCount >= 0) {
        this.items[itemIndex].counter = newCount
      }
    },
  },
})
