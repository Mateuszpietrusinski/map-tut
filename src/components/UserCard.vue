<template>
  <div class="user-card__container">
    <div class="card">
      <div class="image">
        <img :src="user.image" width="100%" />
      </div>

      <div class="text">
        <h3>{{ user.fullName }}</h3>
        <p>{{ user.description }}</p>
      </div>

      <div class="actions">
        <button
          class="action-button action-button--outline"
          type="button"
          @click="$emit('edit', user.id)"
        >
          Edit
        </button>
        <button
          class="action-button action-button--primary"
          type="button"
          @click="$emit('delete', user.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  data() {
    return {
      text: "",
    };
  },
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
.card {
  display: inline-block;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  margin: 20px;
  position: relative;
  margin-bottom: 50px;
  transition: all 0.2s ease-in-out;
}

.user-card__container {
  max-width: 300px;
  flex-basis: 300px;
  margin: 10px;
}

.card:hover {
  /*box-shadow: 0 5px 22px 0 rgba(0,0,0,.25);*/
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 54px;
}

.actions {
  background-color: #fff;
  padding: 10px;
}

.action-button {
  border: none;
  background: #0066a2;
  padding: 5px 15px;
  margin: 5px 10px;
  color: #fff;
  border-radius: 99999px;
  font-size: 16px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.image {
  height: 200px;
  opacity: 0.7;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}

.image:hover,
.card:hover .image {
  height: 200px;
  opacity: 1;
}

.text {
  background: #fff;
  padding: 20px;
}

.text p {
  margin-bottom: 0px;
}

.fab {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  margin-top: -50px;
  right: 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  background: #0066a2;
  -webkit-transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
}

.fab:hover {
  background: #549d3c;
  cursor: pointer;
  -ms-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
</style>
