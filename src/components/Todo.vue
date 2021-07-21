<template>
  <div class="title">
    <h1>Vue</h1>
    <span>
      Tareas <strong>{{dogs.length}}</strong>
    </span>
  </div>
  <div class="msj" v-if="(dogs.length >= 10)">
		<p>¡Wow ya 10 tareas!</p>
	</div>
  <ul>
    <li v-for="dog in dogs" :key="dog.id">
      {{dog.name}}
      <button @click="removeDog">X</button>
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
        dogs: []
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

      removeDog(index) {
        const newDogs = [...this.dogs];
        newDogs.splice(index, 1);
        this.dogs = newDogs;
      },
    },
  };
</script>

<style scoped></style>