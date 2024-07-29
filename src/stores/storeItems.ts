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
    ],
  }),
  actions: {
    // удаление предмета
    decreaseItemCounter(itemId: number, newCount: number): void {
      const itemIndex = this.items.findIndex((item) => item.id === itemId)
      if (itemIndex !== -1 && newCount >= 0) {
        this.items[itemIndex].counter = newCount
      }
    },
  },
})
