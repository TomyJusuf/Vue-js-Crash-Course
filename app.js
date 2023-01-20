const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "John@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/med/men/75.jpg",
    };
  },
  methods: {
    getUser() {
      console.log(this.firstName);
    },
  },
});

app.mount("#app");
