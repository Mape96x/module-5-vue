Vue.createApp({
  data() {
    return {
      color: "",
      rgb: { r: 0, g: 0, b: 0 },
    };
  },
  methods: {
    rndColor() {
      fetch("https://dummy-apis.netlify.app/api/color")
        .then((request) => request.json())
        .then((jsondata) => {
          this.rgb = jsondata.rgb;
          this.color = jsondata.color;
          this.declareBackground();
        });
    },
    declareBackground() {
      document.body.style.background =
        "rgb(" + [this.rgb.r, this.rgb.g, this.rgb.b].join(",") + ")";
    },
    hexChange() {
      r = Number(this.rgb.r).toString(16).toUpperCase();
      g = Number(this.rgb.g).toString(16).toUpperCase();
      b = Number(this.rgb.b).toString(16).toUpperCase();

      this.color = "#" + r + g + b;
    },
    onchange() {
      document.body.style.background =
        "rgb(" + [this.rgb.r, this.rgb.g, this.rgb.b].join(",") + ")";
      this.hexChange();
    },
  },
  computed: {
    hexValue() {
      return this.color;
    },
  },
  created() {
    this.rndColor();
  },
}).mount("#app");
