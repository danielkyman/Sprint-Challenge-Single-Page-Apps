import React, { useState } from "react";
import CharacterList from "./CharacterList"


export default function SearchForm(props) {

  const [name, setName] = useState("")

  const handleChanges = e => {
    setName(e.target.value)
  };

  const submitForm = e => {
    e.preventDefault();
    props.search(name);
    setName("");
  }


  return (
    <section className="search-form">
      <form onSubmit={submitForm}>
        <label htmlFor="search">Search for a name: </label>
        <input
          id="search"
          type="text"
          name="search"
          onChange={handleChanges}
          value={name}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
