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

</style>