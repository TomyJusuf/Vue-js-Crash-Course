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
      (this.firstName = "Sam"),
        (this.lastName = "Joke"),
        (this.email = "Same@gmail.com"),
        (this.gender = "female"),
        (this.picture = "https://randomuser.me/api/portraits/women/2.jpg");
    },
  },
});

app.mount("#app");
