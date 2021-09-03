<template>
  <div class="home"></div>
  <div class="wrapper" v-for="blog in this.blogs" :key="blog.id">
    <div class="cards_wrap">
      <div class="card_item">
        <div class="card_inner">
          <img :src="blog.img" />
          <p>{{blog.title}}</p>
          <p>{{blog.author}}</p>
          <p>{{blog.content}}</p>
          <i @click="blogDelete(blog.id)" class="fas fa-times"></i>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      blogs: [],
    };
  },
  mounted() {
    console.log("mounted");
    this.fetchblogs();
    console.log(this.blogs);
  },
  methods: {
    fetchblogs() {
      fetch("http://localhost:5001/all-blogs")
        .then((response) => response.json())
        .then((data) => (this.blogs = data.data));
      console.log(this.blogs);
    },
    blogDelete(id){
      if(confirm('Are you sure ?'))
      fetch(`http://localhost:5001/del-blog/${id}`,{
        method: "DELETE"
      })
    }
  },
};
</script>

<style>
/*the call */
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans JP", sans-serif;
}

.wrapper .header {
  width: 100%;
  height: 50px;
  background: e36686;
  color: fff;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 900;
}

p {
  font-size: 15px;
  font-weight: 900;
  color: black;
}

i{
    color: blue;
    font-size: 20px;
}

.cards_wrap {
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.cards_wrap .card_item {
  /* padding: 15px 25px; */
   display: flex;
    align-items: center;
    justify-content: space-between;

}

.cards_wrap .card_inner {
  background: lightgreen;
  border-radius: 5px;
  padding: 35px 20px;
  min-width: 225px;
  min-height: 315px;
  max-height: 370px;
  width: 100%;
}

.cards_wrap .card_item img {
  width: 150px;
  height: 150px;
  margin-bottom: 5px;
}

.cards_wrap .card_item .role_name {
  color: black;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-wrap: wrap;
}

.cards_wrap .card_item .real_name {
  color: #b6c0c2;
  font-size: 12px;
  font-weight: 100;
  margin: 5px 0 10px;
  display: flex;
  flex-wrap: wrap;
}

.cards_wrap .card_item .film {
  font-size: 14px;
  line-height: 24px;
  color: #7b8ca0;
  display: flex;
  flex-wrap: wrap;
}

@media screen and (max-width: 1024px) {
  .cards_wrap .card_item {
    width: 33%;
  }
}

@media screen and (max-width: 768px) {
  .cards_wrap .card_item {
    width: 50%;
  }
  .wrapper .header {
    font-size: 16px;
    height: 60px;
  }
}

@media screen and (max-width: 568px) {
  .cards_wrap .card_item {
    width: 100%;
  }
  .wrapper .header {
    font-size: 14px;
  }
}

.wrapper{
    background: whitesmoke;
    margin: 7px;
    padding: 12px 22px;
    cursor: pointer;
}

.wrapper .reminder{
    border-left: 6px solid green;
}

.wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>
