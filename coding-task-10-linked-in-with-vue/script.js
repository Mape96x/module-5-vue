Vue.createApp({
  data() {
    return {
      users: [],
    };
  },
  computed: {},
  methods: {
    randomID() {
      const S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      return (
        S4() +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        S4() +
        S4()
      );
    },
  },
  created() {
    fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
      .then((Response) => Response.json())
      .then((JSONData) => {
        this.users = JSONData;
        console.log(this.users[0].picture);
      });
  },
}).mount("#app");
