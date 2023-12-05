Vue.createApp({
  data() {
    return {
      r: 0,
      g: 0,
      b: 0,
      hex: "",
    };
  },
  methods: {
    setRed(event) {
      this.r = event.target.value;
      this.declareBackground();
    },
    setGreen(event) {
      this.g = event.target.value;
      this.declareBackground();
    },
    setBlue(event) {
      this.b = event.target.value;
      this.declareBackground();
    },
    declareBackground() {
      document.body.style.background =
        "rgb(" + [this.r, this.g, this.b].join(",") + ")";
    },
  },
  computed: {
    hexValue() {
      r = Number(this.r).toString(16);
      g = Number(this.g).toString(16);
      b = Number(this.b).toString(16);

      return "#" + r + g + b;
    },
  },
}).mount("#app");
