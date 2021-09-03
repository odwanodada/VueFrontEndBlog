<template>
<div class="login"></div>

  <form >
    <label>Email:</label>
    <input type="email" required v-model="email" />

    <label>Password:</label>
    <input type="password" required v-model="password" />

    <button class="btn">Login</button>
  </form>
  
</template>

<script>
export default {
    name: "Login"

}
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

input[type="text"].textarea {
  display: block;
  width: 100%;
  padding: 10px;
  height: 30px;
}

</style>