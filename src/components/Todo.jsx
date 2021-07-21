import React, { useState } from "react";

export default function App() {
  const [dogs, setDogs] = useState([]);
  const [newDog, setNewDog] = useState("");

  function addDog() {
    if (!newDog) return

    let newDogs = [...dogs,
      {
        id: Date.now(),
        name: newDog,
      }
    ];

    setDogs(newDogs);
    setNewDog("");
  };

  function handleSubmit(e) {
    e.preventDefault();
  };

  function removeDog(index) {
    const newDogs = [...dogs];
    newDogs.splice(index, 1);
    setDogs(newDogs);
  }

  // if (dogs.length >= 10) {
  //   <div class="msj">
  //     <p>¡Wow ya 10 tareas!</p>
  //   </div>
  //   console.log('wow');
  // }

  return (
    <>
      <div className="title">
        <h1>React</h1>
        <span>
          Tareas <strong>{dogs.length}</strong>
        </span>
      </div>
      {dogs.length >= 10 &&
        <div className="msj">
          <p>¡Wow ya 10 tareas!</p>
        </div>
      }
      <ul>
        {dogs.map((dog, index) => (
          <li key={index}>
            {dog.name}
            <button onClick={removeDog}>X</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newDog}
          onChange={(e) => setNewDog(e.target.value)}
        />
        <button onClick={addDog}>Add a Dog</button>
      </form>
    </>
  );
}
