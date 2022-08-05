<template>
  <div>
    <h1>Страница с постами</h1>
<!--    <h3>-->
<!--      {{$store.state.isAuth ? 'Пользователь авторизован' : 'Пользователь не авторизован'}}-->
<!--    </h3>-->
<!--&lt;!&ndash;    для того чтобы получить геттере нужно $store.getters.название&ndash;&gt;-->
<!--    <h2>getter {{$store.getters.doubleLikes}}</h2>-->
<!--    <div>-->
<!--&lt;!&ndash;      для того чтобы вызвать мутацию используется $store.commit('названиеМутации')&ndash;&gt;-->
<!--      <my-button @click="$store.commit('incrementLikes')">-->
<!--        Лайк-->
<!--      </my-button>-->
<!--      <my-button @click="$store.commit('decrementLikes')">-->
<!--        Дизлайк-->
<!--      </my-button>-->
<!--    </div>-->
<!--    <h2>{{$store.state.likes}}</h2>-->
    <my-input v-focus v-model="searchQuery" placeholder="Поиск" />
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
    <PageItem v-intersection="loadMorePosts" :posts="posts" :total-pages="totalPages"/>
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
  name: "PostPageWithStore",
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
    // async fetchPosts(pageNumber) {
    //   try {
    //     this.isPostsLoading = true
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts' , {
    //       params: {
    //         _page: this.page,
    //         _limit: this.limit
    //       }
    //     })
    //     this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
    //     this.posts = response.data
    //     this.isPostsLoading = false
    //   }
    //   catch (e) {
    //     alert('ошибка')
    //   }
    //   finally {
    //   }
    // },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert('Ошибка')
      }
    }
  },
  mounted() {
    this.loadMorePosts();
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

<style scoped>
.app__btns {
  display: flex;
  justify-content: space-between;
}
</style>