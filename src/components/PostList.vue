<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <PostItem @remove="$emit('remove', post)" :post="post" v-for="post in posts" :key="post.id"/>
  </div>
  <div v-else>
    <h3 class="empty">Список постов пуст</h3>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  name: "PostList",
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.empty {
  color: red;
}
</style>