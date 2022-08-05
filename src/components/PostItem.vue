<template>
  <div class="post">
    <div>{{$store.state.likes}}</div>
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
    <div class="post__buttons">
      <my-button @click="$router.push('/posts/' + post.id)">
        Подробнее
      </my-button>
      <MyButton
      @click="$emit('remove', post)">
        Удалить
      </MyButton>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true
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
.post__buttons button {
  margin-top: 15px;
  align-self: end;
  background: none;
  border: 2px solid red;
  padding: 10px;
  margin-right: 15px;
}
.post__buttons button:last-child {
  margin-right: 0;
}
</style>