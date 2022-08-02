<template>
<div class="app">
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
</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      posts: [
        {id: 1, title: 'Заголовок поста1', body: 'описание поста1'},
        {id: 2, title: 'Заголовок поста2', body: 'описание поста2'},
        {id: 3, title: 'Заголовок поста3', body: 'описание поста3'},
      ],
      title : '',
      body : ''
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
      this.title = ''
      this.body = ''
    }
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

form {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.btn {
  align-self: end;
  background: none;
  border: 2px solid red;
  padding: 10px;
}

.post {
  padding: 15px;
  border: 2px solid green;
  margin-bottom: 15px;
}

.input {
  width: 100%;
  border: 1px solid green;
  padding: 10px 15px;
  margin-bottom: 15px;
}

</style>