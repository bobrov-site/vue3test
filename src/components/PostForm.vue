<template>
  <div>
<!--    сабмит превент можно записывать в форме-->
    <form @submit.prevent>
      <h4>Создание поста</h4>
<!--      Для того чтобы была синхранизация данных и инпута прописывается v-model-->
      <input
          v-model="post.title"
          class="input"
          type="text"
          placeholder="название поста"
      >
      <input
          v-model="post.body"
          class="input"
          type="text"
          placeholder="описание поста">
      <my-button @click="createPost" class="btn">Создать</my-button>
    </form>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  name: "PostForm",
  components: {MyButton},
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      // Для того чтобы отправить данные в родительский компонент используется this.$emit
      //В аргументе прописывается название директивы, во втором какие данные отправляются
      this.$emit('create', this.post)
      //Эти же данные прописываются и в v-model и в data()
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
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