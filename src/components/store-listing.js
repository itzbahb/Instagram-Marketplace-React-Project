import { useParams } from "react-router-dom";
import { getStore } from "../api/Stores-Data";

export default function StoreListing() {
  let params = useParams();
  let storeId = params.storeId;

  let { title, items } = getStore(storeId);
  return (
    <>
    <div className='center'>
      <h1>{title}</h1>
      <p>All the Sellers Available Today</p>
    </div>

    <div className="listings">
      {items.map((item) => (
        <div className="listing" key={item.itemId}>
          <img src={item.source}></img>
          <h1>{item.title}</h1>
          <h1>{item.price + "$"}</h1>
        </div>
      ))}
    </div></>
  );
}
