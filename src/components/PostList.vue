<template>
  <div v-for="post in posts" class="post">
    <div>
      <strong>
        Название: <strong>{{post.title}}</strong>
      </strong>
    </div>
    <div>
      <strong>
        Описание: <strong>{{post.body}}</strong>
      </strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
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