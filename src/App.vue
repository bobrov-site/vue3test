<template>
<div class="app">
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

.input {
  width: 100%;
  border: 1px solid green;
  padding: 10px 15px;
  margin-bottom: 15px;
}

</style>