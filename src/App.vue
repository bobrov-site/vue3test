<template>
<div>
  <div>
    <button @click="addLike">like</button>
    <button @click="addDislike">dislike</button>
  </div>
  <div>
    количество лайков <strong> {{likes}}</strong>
  </div>
  <div>
    количество дизлайков <strong> {{dislikes}}</strong>
  </div>
</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      likes: 0,
      dislikes: 5,
    }
  },
  methods: {
    addLike() {
      this.likes += 1
    },
    addDislike() {
      this.dislikes += 1
    }
  }
}
</script>

<style scoped>

</style>