<template>
  <nav class="navigation">
    <ul>
      <li>
<!--         используется для вставки ссылки в кнопку $router.push('/ссылка')-->
<!--        в другом случае используется <router-link>-->
        <my-button @click="$router.push('/posts')">
          Посты
        </my-button>
      </li>
      <li>
        <my-button @click="$router.push('/about')">
          О приложении
        </my-button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style scoped>
.navigation {
  margin-top: 15px;
  width: 100%;
  background: green;
  padding: 30px;
}
.navigation ul {
  display: flex;
  list-style-type: none;
}
.navigation ul li {
  margin-right: 15px;
}
.navigation ul li a {
  text-decoration: none;
  color: white;
}
</style>