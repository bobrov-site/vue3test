<template>
<div class="app">
  <post-form/>
  <post-list/>
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
      title : '',
      body : ''
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
      this.title = ''
      this.body = ''
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