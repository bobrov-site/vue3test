<template>
<!--  для того чтобы отдать данные из компонента нужно прописать пропсы :value (для инпута)-->
<!--  Чтобы произошло само обновление, нужно событие для инпута @input, здесь используется updateInput-->
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      //шаблон для обновления данных
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid green;
  padding: 10px 15px;
  margin-bottom: 15px;
}
</style>