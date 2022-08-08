<template>
  <div class="observer">

  </div>

</template>

<script>
export default {
  name: "PageItem",
  props: {
  },
  methods: {
  },
}
</script>

<style scoped>
.page__wrapper {
  display: flex;
  flex-direction: row;
}
.page {
  border: 1px solid red;
  padding: 10px;
  margin-right: 15px;
  cursor: pointer;
}
.page:last-child {
  margin-right: 0;
}
.current-page {
  border: 1px solid green;
}
</style>