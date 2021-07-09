<script>
	let dogs = [];
	let newDog = null;

	function addDog() {
		if (!newDog) return;

		dogs = [...dogs,
			{
				id: new Date(),
				name: newDog
			}
		];
		newDog = null;
	}

	// function removeDog(id) {
	// 	let rm = dogs.filter((dog) => dog.id == id);
	// 	// dogs.splice(id, 1);
	// }

  function handleSubmit(e) {
    e.preventDefault();
  }
</script>

<ul>
	{#each dogs as dog }
		<li key={dog.id}>
			{dog.name}
      <!-- <button on:click={removeDog}>X</button> -->
    </li>
	{/each}
</ul>

<form on:submit={handleSubmit}>
  <input type="text" bind:value={newDog} />
  <button on:click={addDog}>Add a Dog</button>
</form>

<style></style>