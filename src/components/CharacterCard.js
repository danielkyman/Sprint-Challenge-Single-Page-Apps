import React from "react";

export default function CharacterCard(props) {
  return (
    <div className="list">
      {props.data.map(d => (
        <div className="card" key={d.id}>
          <img src={d.image} alt="" />
          <h2>{d.name}</h2>
          <p>{d.status}</p>
          <p>{d.species}</p>
          <p>{d.gender}</p>
        </div>
      ))}
    </div>
  );
}
