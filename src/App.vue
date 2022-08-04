<template>
<div class="app">
  <h1>Страница с постами</h1>
  <my-input v-model="searchQuery" placeholder="Поиск" />
  <div class="app__btns">
    <my-button @click="showDialog">Создать пост</my-button>
    <my-select :options="sortOptions" v-model="selectedSort"/>
  </div>
<!--  для моделей существуют модификаторы. .trim для удаления пробелов внутри строки-->
  <input style="display: none" v-model.trim="modificatorValue">
  <MyDialog v-model:show="dialogVisible">
    <PostForm @create="createPost"/>
  </MyDialog>
  <PostList v-if="!isPostsLoading" @remove="removePost" :posts="sortedAndSearchedPosts"/>
  <my-spinner v-else/>
  <PageItem v-model:observer-node="observerNode" :posts="posts" :total-pages="totalPages"/>
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
import MyInput from "@/components/UI/MyInput";
import PageItem from "@/components/PageItem";
export default {
  name: "App",
  components: {
    PageItem,
    MyInput,
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
      ],
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      observerNode: ''
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
    async fetchPosts(pageNumber) {
      try {
        this.isPostsLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts' , {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data
        this.isPostsLoading = false
      }
      catch (e) {
        alert('ошибка')
      }
      finally {
      }
    },
    async loadMorePosts(pageNumber) {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts' , {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data]
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
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    }

    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.observerNode);
  },
  computed: {
    sortedPosts(){
      return [...this.posts].sort((post1,post2) => String(post1[this.selectedSort])?.localeCompare(String(post2[this.selectedSort]), 'en', {numeric: true})
      )
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery))
    },
  },
  watch: {
    // отслеживание состояние вотчера
    // page() {
    //   this.fetchPosts();
    // }
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