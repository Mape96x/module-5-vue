const app = Vue.createApp({
  data() {
    return {
      users: [
        {
          username: "David",
          status: "online",
          lastActivity: 10,
        },
        {
          username: "Lucy",
          status: "offline",
          lastActivity: 22,
        },
        {
          username: "Bob",
          status: "online",
          lastActivity: 104,
        },
      ],
    };
  },
  methods: {
    test(user) {
      console.log(user);
      if (user.status !== "online") {
        return this.cssPropsGray;
      } else if (user.status === "online" && user.lastActivity > 10) {
        return this.cssPropsRed;
      } else {
        return this.cssPropsGreen;
      }
    },
  },
  computed: {
    cssPropsRed() {
      return {
        "--color": "red",
      };
    },
    cssPropsGreen() {
      return {
        "--color": "green",
      };
    },
    cssPropsGray() {
      return {
        "--color": "gray",
      };
    },
  },
}).mount("#app");
