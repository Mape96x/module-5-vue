Vue.createApp({
  data() {
    return {
      text: "Good Morning",
      text2: "Good Night",
      onClassName: "bodyClick",
    };
  },
  methods: {
    active(event) {
      if (document.title === this.text) {
        document.title = this.text2;
      } else {
        document.title = this.text;
      }

      document.body.classList.toggle(this.onClassName);
      event.target.classList.toggle("btnClick");
    },
  },
}).mount("#app");
