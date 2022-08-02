<template>
<div class="app">
  <PostForm @create="createPost"/>
  <PostList :posts="posts"/>
</div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
export default {
  name: "App",
  components: {
    PostList, PostForm
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'Заголовок поста1', body: 'описание поста1'},
        {id: 2, title: 'Заголовок поста2', body: 'описание поста2'},
        {id: 3, title: 'Заголовок поста3', body: 'описание поста3'},
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 15px;
}

</style>