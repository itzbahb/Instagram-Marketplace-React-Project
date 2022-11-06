import React from "react";

export default function Store({ storeId, title, items, source }) {
  function onClick() {
  }
  return (
    <button className="listing" onClick={() => onClick()}>
      <img src={source}></img>
      <h1>{title}</h1>
    </button>
  );
};

