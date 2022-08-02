<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input
        v-bind:value="title"
        @input="title = $event.target.value"
        class="input"
        type="text"
        placeholder="название поста"
    >
    <input
        v-bind:value="body"
        @input="body = $event.target.value"
        class="input"
        type="text"
        placeholder="описание поста">
    <button @click="createPost" class="btn">Создать</button>
  </form>
</template>

<script>
export default {
  name: "PostForm"
}
</script>

<style scoped>
.btn {
  align-self: end;
  background: none;
  border: 2px solid red;
  padding: 10px;
}

.input {
  width: 100%;
  border: 1px solid green;
  padding: 10px 15px;
  margin-bottom: 15px;
}
</style>