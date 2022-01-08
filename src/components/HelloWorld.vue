<template>
  <div>
    <h3>My First name is {{ name }}, and Last name is {{ lastName }}.</h3>

    <div class="counter">
      <div class="display-area">
        {{ counter }}
      </div>
      <div class="buttons">
        <button @click="counterAdd">+</button>
        <button @click="counterSubtract">-</button>
      </div>
    </div>

    <h3>{{ fullName }}</h3>

    <div class="joke">
      <b>Joke:</b> {{ joke.value }}
      <button @click="getJoke">Next Joke</button>
    </div>

    <div class="all-jokes">
      All jokes:
      <ul class="loop" v-for="joke in allJokes" :key="joke.id">
        <li>
          {{ joke.value }}
        </li>
      </ul>
    </div>

    <div class="binding">
      <input id="val" type="text" v-model="textVal" />
      <label for="val">You've entered : {{ textVal }}</label>
    </div>

    <div>
      <form class="form" name="myform" @submit.prevent="formSubmit()">
        <input v-model="uName" type="text" placeholder="Enter uid" />
        <input v-model="uPass" type="text" placeholder="Enter pass" />
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Hello",
  data() {
    return {
      name: "Sagar",
      lastName: "Chauhan",
      counter: 0,
      joke: "",
      allJokes: [],
      textVal: "",
      uName: "",
      uPass: "",
    };
  },
  methods: {
    counterAdd() {
      this.counter++;
    },
    counterSubtract() {
      if (this.counter === 0) {
        alert("Cannnot be less than 0");
      } else this.counter--;
    },
    getJoke() {
      axios
        .get("https://api.chucknorris.io/jokes/random")
        .then((response) => {
          this.joke = response.data;
          this.allJokes.push(this.joke);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    formSubmit() {
      console.log(this.uName, this.uPass);
      this.uName = "";
      this.uPass = "";
    },
  },
  computed: {
    fullName() {
      return `The full name is ${this.name} ${this.lastName}`;
    },
  },
  created() {
    this.getJoke();
  },
};
</script>

<style scoped>
.counter,
.joke,
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>