<template>
<div>
<!--  для получения параметров по роутеру нужно использовать $route.params-->
  <h1>
    Пост с id
    {{$route.params.id}}
  </h1>
</div>
</template>

<script>
export default {
  name: "PostPageId",
}
</script>

<style scoped>

</style>