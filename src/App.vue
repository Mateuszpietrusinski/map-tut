<template>
  <div id="app">
    <div class="container">
      <div class="flex">
        <UserCard v-for="user in users" :key="user.id" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from "./components/UserCard.vue";
import mockData from "./assets/mock_data";
export default {
  name: "App",
  data() {
    return {
      users: [],
    };
  },
  components: {
    UserCard,
  },
  created() {
    const { mockDataArray } = mockData;

    this.users = mockDataArray();
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 30px;
}

body {
  background: #eee;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
