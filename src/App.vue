<template>
  <div id="nav">
    <router-link to="/">Home</router-link><i class="fas fa-home"></i> |
    <router-link to="/addBlog">AddBlog</router-link><i class="fas fa-book"></i> |
    <router-link to="/reg">Registration</router-link> <i class="fas fa-unlock"></i> |
    <router-link to="/login">Login</router-link><i class="fas fa-lock"></i>|
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: inline-block;
  margin: 60px auto 45px;
  background-color: lightgreen;
  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
}

#nav a {
  display: inline-block;
  padding: 18px 30px;
  color: black !important;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none !important;
  line-height: 1;
  text-transform: uppercase;
  background-color: transparent;

  -webkit-transition: background-color 0.25s;
  -moz-transition: background-color 0.25s;
  transition: background-color 0.25s;
}

#nav a:first-child {
  border-radius: 2px 0 0 2px;
}

#nav a:last-child {
  border-radius: 0 2px 2px 0;
}

#nav.home .home,
#nav.projects .projects,
#nav.services .services,
#nav.contact .contact {
  background-color: #e35885;
}
</style>
