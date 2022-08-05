<template>
  <div class="observer">

  </div>
<!--  пагинация layout-->
<!--  <div class="page__wrapper">-->
<!--    <div @click="changePage(pageNumber)" v-for="pageNumber in totalPages" :key="pageNumber" class="page" :class="{'current-page' : pageNumber === page }">-->
<!--      {{pageNumber}}-->
<!--    </div>-->
<!--  </div>-->

</template>

<script>
export default {
  name: "PageItem",
  props: {
    // totalPages : {
    //   type: Number,
    //   required: true,
    // },
    // page: {
    //   type: Number,
    //   required: true
    // },
    // observerNode: {
    //   required: true
    // }
  },
  methods: {
    // // пагинация
    // changePage(pageNumber) {
    //   this.$emit('update:page', pageNumber);
    // }
  },
  // mounted() {
  //   this.$emit('update:observerNode', this.$refs.observer)
  // }
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