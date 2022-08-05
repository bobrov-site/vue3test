<template>
  <div>
<!--    сабмит превент можно записывать в форме-->
    <form @submit.prevent>
      <h4>Создание поста</h4>
<!--      Для того чтобы была синхранизация данных и инпута прописывается v-model-->
      <my-input
          v-focus
          v-model="post.title"
          class="input"
          placeholder="название поста"
      />
      <my-input
          v-model="post.body"
          class="input"
          placeholder="описание поста" />
      <my-button @click="createPost" class="btn">Создать</my-button>
    </form>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
export default {
  name: "PostForm",
  components: {MyInput},
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
  },
  // для отслеживания данных
  watch: {
    post: {
      handler(newVal) {
        console.log(newVal)
      },
      deep: true
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
</style>