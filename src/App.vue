<template>
  <div id="app">
    <div class="container">
      <div class="flex">
        <UserCard
          v-for="user in usersArray"
          :key="user.id"
          :user="user"
          @edit="onUserEdit"
          @delete="onUserDelete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import UserCard from "./components/UserCard.vue";
import mockData from "./assets/mock_data";
export default {
  name: "App",
  components: {
    UserCard,
  },
  data() {
    return {
      usersObj: mockData.mockDataObject(),
    };
  },
  computed: {
    usersArray() {
      return Object.values(this.usersObj);
    },
  },
  methods: {
    onUserDelete(id) {
      console.log(id);
      const t0 = performance.now();
      Vue.delete(this.usersObj, id);
      const t1 = performance.now();
      console.log(`Delete took ${t1 - t0} milliseconds.`);
    },
    onUserEdit(id) {
      const t0 = performance.now();
      this.usersObj[id].description = "I'm super updated content";
      const t1 = performance.now();
      console.log(`Edit took ${t1 - t0} milliseconds.`);
    },
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
