const year = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

const app = Vue.createApp({
  data() {
    return {
      userName: "Marek Pentzek",
      acutalTime: year,
    };
  },
}).mount(".card");
