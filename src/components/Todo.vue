<template>
  <ul>
    <li v-for="dog in dogs" :key="dog.id">
      {{dog.name}}
      <!-- <button @click="removeDog">X</button> -->
    </li>
  </ul>
  <form @submit="handleSubmit">
    <input type="text" v-model="newDog">
    <button @click="addDog">Add a Dog</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newDog: null,
      dogs: [],
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
    },

    addDog() {
      if (!this.newDog) return;

      this.dogs = [...this.dogs,
        {
          id: new Date(),
          name: this.newDog
        }
      ];

      this.newDog = null;
    },

    // removeDog(index) {
    //   this.dogs.splice(index, 1);
    // },
  },
};
</script>

<style scoped></style>
