import React from "react";
import { Link } from "react-router-dom";

export default function Store(props) {
  let { store } = props;

  return (
    <Link to={`/store/${store.storeId}`}>
      <div className="listing">
        <img src={store.source}></img>
        <h1>{store.title}</h1>
      </div>
    </Link>
  );
};

