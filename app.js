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
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      console.log(results);
      console.log(results);
      (this.firstName = results[0].name.first),
        (this.lastName = "Joke"),
        (this.email = "Same@gmail.com"),
        (this.gender = "female"),
        (this.picture = "https://randomuser.me/api/portraits/med/women/75.jpg");
    },
  },
});

app.mount("#app");
