<template>
<div class="app">
  <h1>Страница с постами</h1>
  <my-button @click="showDialog">Создать пост</my-button>
  <MyDialog v-model:show="dialogVisible">
    <PostForm @create="createPost"/>
  </MyDialog>
  <PostList @remove="removePost" :posts="posts"/>
</div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
export default {
  name: "App",
  components: {
    MyButton,
    MyDialog,
    PostList, PostForm
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'Заголовок поста1', body: 'описание поста1'},
        {id: 2, title: 'Заголовок поста2', body: 'описание поста2'},
        {id: 3, title: 'Заголовок поста3', body: 'описание поста3'},
      ],
      dialogVisible: false
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog(event) {
      this.dialogVisible = true;
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