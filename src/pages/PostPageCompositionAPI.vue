<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input v-focus v-modal="searchQuery" placeholder="Поиск" />
    <div class="app__btns">
<!--      <my-button @click="showDialog">Создать пост</my-button>-->
      <my-select :options="sortOptions" v-model="selectedSort"/>
    </div>
    <!--  для моделей существуют модификаторы. .trim для удаления пробелов внутри строки-->
<!--    <input style="display: none" v-model.trim="modificatorValue">-->
<!--    <MyDialog v-model:show="dialogVisible">-->
<!--      <PostForm @create="createPost"/>-->
<!--    </MyDialog>-->
    <PostList v-if="!isPostsLoading" :posts="sortedAndSearchedPosts"/>
    <my-spinner v-else/>
    <PageItem v-intersection="loadMorePosts" :posts="posts" :total-pages="totalPages"/>
  </div>
</template>

<script>
import PageItem from "@/components/PageItem";
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import MyButton from "@/components/UI/MyButton";
import {usePosts} from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
export default {
  name: "PostPageWithStore",
  components: {
    MyButton,
    PageItem,
    PostList, PostForm
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'}
      ]
    }
  },
  setup(props) {
    const {posts, isPostLoading, totalPages} = usePosts(10);
    const {sortedPosts, selectedSort} = useSortedPosts(posts)
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

    return {
      posts,
      isPostLoading,
      totalPages,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
    }
  }
}
</script>

<style scoped>
.app__btns {
  display: flex;
  justify-content: space-between;
}
</style>