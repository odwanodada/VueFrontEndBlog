<template>
  <div class="reg"></div>

  <form @submit.prevent="userReg" ref="form" method="post">
    <label>Name:</label>
    <input type="name" required v-model="name" />

    <label>Username:</label>
    <input type="username" required v-model="username" />

    <label>Email:</label>
    <input type="email" required v-model="email" />

    <label>Password:</label>
    <input type="password" required v-model="password" />

    <button type="submit" class="btn">Register</button>
  </form>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      name: null,
      username: null,
      email: null,
      password: null,
    };
  },
  methods: {
    userReg() {
      fetch("http://localhost:5000/add-users", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
            alert("Successfully registered")
            this.$refs.form.reset();
          console.log(json);
        });
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: lightgreen;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: black;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 20px;
  margin: 0 10px 0 0;
  position: relative;
  top: 3px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

.btn {
  text-align: center;
}

.error {
  color: greenyellow;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
