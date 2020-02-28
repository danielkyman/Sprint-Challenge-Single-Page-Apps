import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from "axios";

export default function CharacterList() {

  const [data, setData] = useState([]);
  // const [names, setNames] = useState("");


  const search = name => {
    console.log(name);
    const newData = data.filter(info => {
      return info.name === name;
    }); setData(newData);
  }


  useEffect(() => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setData(response.data.results)
      })
      .catch(error => {
        console.log("Data not returned - ", error);
      });
  }, []);;


  return (
    <section className="character-list">
      <SearchForm search={search} />
      <CharacterCard data={data} />
    </section>
  );
}


// id={char.id}
//             name={char.name}
//             status={char.status}
//             species={char.species}
//             gender={char.gender}
//             image={char.image}
