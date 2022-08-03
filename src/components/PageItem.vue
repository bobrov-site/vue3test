<template>
  <div class="page__wrapper">
    <div v-for="page in totalPages">
      {{page}}
    </div>
  </div>
</template>

<script>
export default {
  name: "PageItem",
  props: {
    totalPages : {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>

</style>