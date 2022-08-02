<template>
  <div class="post">
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
      <MyButton>Удалить</MyButton>
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
}
</style>