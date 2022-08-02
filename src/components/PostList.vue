<template>
  <div>
    <h3>Список постов</h3>
    <PostItem :post="post" v-for="post in posts"/>
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
.post {
  padding: 15px;
  border: 2px solid green;
  margin-bottom: 15px;
}
</style>