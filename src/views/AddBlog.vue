<template>
  <div class="addBlog"></div>
  <form @submit.prevent="blogAdd" ref="formAdd" method="POST">
    <label>Title:</label>
    <input type="title" required v-model="title" />

    <label>Author:</label>
    <input type="author" required v-model="author" />

    <label>Image:</label>
    <input type="file" name="img" @change="selectedImage" required  />

    <label>Content:</label>
    <textarea type="content" required v-model="content"> </textarea>

    <button type="submit" class="btn">Create an Blog</button>
    
    
   
 
  </form>
</template>

<script>
export default {
  name: "AddBlog",
  data() {
    return {
      title: null,
      author: null,
      img: null,
      content: null,
    };
  },
  methods: {
    blogAdd(){
      const blob = new Blob([this.img], { type: "img"});
      const reader = new FileReader();
      reader.readAsDataURL(blob)
      reader.onload = () => {
        this.img = reader.result;
      }
      console.log(this.reader)
      fetch("http://localhost:5001/add-blog", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          author: this.author,
          img: this.img,
          content: this.content,
        }),
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          // alert("Successfully Blog Added")
          //   this.$refs.formAdd.reset();
          //   window.location.href = "http://localhost:8080/"
        });
    },
    selectedImage(e){
      this.img = e.target.files[0]
      this.$emit('img', this.img)
      console.log(this.img)
    }
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

input[type="text"].textarea {
  display: block;
  width: 100%;
  padding: 10px;
  height: 30px;
}
</style>
