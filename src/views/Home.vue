<template>
  <div class="home"></div>
  <div id="flashcard-app" class="container" v-for="blog in this.blogs" :key="blog.id">
    <div class="card">
      <div class="image">
        <img :src="blog.img" />
      </div>
      <p>Title: {{blog.title}}</p>
      <p>Author: {{blog.author}}</p>
      <p>Content: {{blog.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      blogs:[]
    }

  },
  mounted(){
    console.log("mounted")
      this.fetchblogs()
      console.log(this.blogs)
  },
  methods:{
    fetchblogs(){
    fetch('http://localhost:5000/all-blogs')
    .then(response => response.json())
    .then(data => this.blogs = data.data)
    console.log(this.blogs)
  }
  }
  
};
</script>

<style>
body {
  font-family: "Montserrat", sans-serif;
  text-align: center;
}

ul {
  padding-left: 0;
  display: flex;
  flex-flow: row wrap;
}

li {
  list-style-type: none;
  padding: 10px 10px;
  transition: all 0.3s ease;
}

.container {
  max-width: 100%;
  padding: 2em;
}

.card {
  display: block;
  width: 150px;
  /* height: 175px; */
  padding: 80px 50px;
  background-color: #51aae5;
  border-radius: 7px;
  margin: 5px;
  text-align: center;
  line-height: 27px;
  cursor: pointer;
  position: relative;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  -webkit-box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  -moz-box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  will-change: transform;
}

li:hover {
  transform: scale(1.1);
}

li:nth-child(-n + 3) .card {
  background-color: #e65f51;
}

li:nth-child(2n + 1) .card {
  background-color: #a17de9;
}

li:nth-child(4n) .card {
  background-color: #feca34;
}

li:nth-child(5n-2) .card {
  background-color: #51aae5;
}

li:nth-child(4n + 4) .card {
  background-color: #feca34;
}

li:nth-child(-7n + 7) .card {
  background-color: #e46055;
}


.flip-enter-active {
  transition: all 0.4s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter,
.flip-leave {
  transform: rotateY(180deg);
  opacity: 0;
}

/* Form */
.flashcard-form {
  position: relative;
}

label {
  font-weight: 400;
  color: #333;
  margin-right: 10px;
}

</style>
