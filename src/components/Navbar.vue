<template>
  <!--         используется для вставки ссылки в кнопку $router.push('/ссылка')-->
  <!--        в другом случае используется <router-link>-->
  <nav class="navigation">
    <div class="logo">
      <my-button @click="$router.push('/')">
        Vue 3
      </my-button>
    </div>
    <ul>
      <li>
        <my-button @click="$router.push('/posts')">
          Посты
        </my-button>
      </li>
      <li>
        <my-button @click="$router.push('/about')">
          О приложении
        </my-button>
      </li>
      <li>
        <my-button @click="$router.push('/store')">
          Store
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navigation ul {
  display: flex;
  list-style-type: none;
}
.navigation ul li {
  margin-right: 15px;
}
.navigation ul li {
  text-decoration: none;
  color: black;
  background-color: white;
}
.logo button {
  background-color: brown;
  color: white;
}
</style>