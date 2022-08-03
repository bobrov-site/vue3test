<template>
<div class="app">
  <h1>Страница с постами</h1>
  <div class="app__btns">
    <my-button @click="showDialog">Создать пост</my-button>
    <my-select :options="sortOptions" v-model="selectedSort"/>
  </div>
<!--  для моделей существуют модификаторы. .trim для удаления пробелов внутри строки-->
  <input style="display: none" v-model.trim="modificatorValue">
  <MyDialog v-model:show="dialogVisible">
    <PostForm @create="createPost"/>
  </MyDialog>
  <PostList v-if="!isPostsLoading" @remove="removePost" :posts="sortedPosts"/>
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
import MySelect from "@/components/UI/MySelect";
export default {
  name: "App",
  components: {
    MySelect,
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
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'по названию'},
        {value: 'body', name: 'по описанию'},
        {value: 'id', name: 'по id'},
      ]
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
  },
  computed: {
    sortedPosts(){
      return [...this.posts].sort((post1,post2) => String(post1[this.selectedSort])?.localeCompare(String(post2[this.selectedSort]), 'en', {numeric: true})
      )
    }
  },
  watch: {
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

.app__btns {
  display: flex;
  justify-content: space-between;
}

</style>