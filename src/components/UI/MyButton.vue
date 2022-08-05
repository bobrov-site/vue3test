<template>
<button class="btn">
<!--  слот использования для вывода контента внутри-->
<slot></slot>
</button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>
.btn {
  align-self: end;
  background: none;
  border: 2px solid red;
  padding: 10px;
  cursor: pointer;
}
</style>