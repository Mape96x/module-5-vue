Vue.createApp({
  data() {
    return {
      users: [],
      newUser: {},
      isConnected: true,
      counter: 0,
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
    deleteUser(user) {
      this.users = this.users.filter((obj) => obj !== user);
      this.addOneUser();
    },
    addOneUser() {
      fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=1")
        .then((Response) => Response.json())
        .then((JSONData) => {
          newUser = JSONData[0];
          this.users.push(newUser);
        });
    },
    connect(event) {
      if (event.target.innerText === "Connect") {
        event.target.innerText = "Pending";
        this.counter++;
      } else {
        event.target.innerText = "Connect";
        this.counter--;
      }
    },
  },
  created() {
    fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
      .then((Response) => Response.json())
      .then((JSONData) => {
        this.users = JSONData;
      });
  },
}).mount("#app");
