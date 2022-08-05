<template>
  <nav class="navigation">
    <ul>
      <li>
        <router-link to="/posts">Посты</router-link>
      </li>
      <li>
        <router-link to="/about">О приложении</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MyNav"
}
</script>

<style scoped>
.navigation {
  margin-top: 15px;
}
.navigation ul {
  display: flex;
}
.navigation ul li {
  margin-right: 15px;
}
</style>