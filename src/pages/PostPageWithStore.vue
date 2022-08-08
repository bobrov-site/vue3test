<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input @update:model-value="setSearchQuery" v-focus :model-value="searchQuery" placeholder="Поиск" />
    <div class="app__btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select @update:model-value="setSelectedSort" :options="sortOptions" :model-value="selectedSort"/>
    </div>
    <!--  для моделей существуют модификаторы. .trim для удаления пробелов внутри строки-->
<!--    <input style="display: none" v-model.trim="modificatorValue">-->
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost"/>
    </MyDialog>
    <PostList v-if="!isPostsLoading" @remove:model-value="removePost" :posts="sortedAndSearchedPosts"/>
    <my-spinner v-else/>
    <PageItem v-intersection="loadMorePosts" :posts="posts" :total-pages="totalPages"/>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import PageItem from "@/components/PageItem";
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
export default {
  name: "PostPageWithStore",
  components: {
    PageItem,
    PostList, PostForm
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
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
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      modificatorValue: state => state.post.modificatorValue,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      sortOptions: state => state.post.sortOptions,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
  watch: {

  }
}
</script>

<style scoped>
.app__btns {
  display: flex;
  justify-content: space-between;
}
</style>