Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    updateCordinates(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    deleteFruit(fruit) {
      this.fruitBasket = this.fruitBasket.filter((obj) => obj !== fruit);
    },
  },
}).mount("#app");
