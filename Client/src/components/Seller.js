import React from "react";
import { Link } from "react-router-dom";

export default function Seller(props) {
  let { seller } = props;

  return (
    <Link to={`/seller/${seller.userId}`}>
      <div className="listing">
        <img src={seller.pic}></img>
        <h1>{seller.username}</h1>
      </div>
    </Link>
  );
};
