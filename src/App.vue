<template>
<div class="app">
  <h1>Страница с постами</h1>
<!--  для моделей существуют модификаторы. .trim для удаления пробелов внутри строки-->
  <input style="display: none" v-model.trim="modificatorValue">
  <my-button @click="showDialog">Создать пост</my-button>
  <MyDialog v-model:show="dialogVisible">
    <PostForm @create="createPost"/>
  </MyDialog>
  <PostList v-if="!isPostsLoading" @remove="removePost" :posts="posts"/>
  <my-spinner v-else/>
</div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import axios from 'axios'
import MySpinner from "@/components/UI/MySpinner";
export default {
  name: "App",
  components: {
    MySpinner,
    MyButton,
    MyDialog,
    PostList, PostForm
  },
  data() {
    return {
      posts: [
      ],
      dialogVisible: false,
      modificatorValue: '',
      isPostsLoading: false
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
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data
        console.log(response);
        this.isPostsLoading = false
      }
      catch (e) {
        alert('ошибка')
      }
      finally {
      }
    }
  },
  mounted() {
    this.fetchPosts();
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