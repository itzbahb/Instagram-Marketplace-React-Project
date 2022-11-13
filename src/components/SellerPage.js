import { useParams } from "react-router-dom";
import { getUser } from "../api/Users-Data";

export default function SellerPage() {
  let params = useParams();
  let userId = params.userId;

  let { title, items } = getUser(userId);
  return (
    <>
    <div className='center'>
      <h1>{title}</h1>
      <p>All Items Available Today</p>
    </div>

    <div className="listings">
      {items.map((post) => (
        <div className="listing" key={post.postId}>
          <img src={post.source}></img>
          <h1>{post.title}</h1>
          <h1>{post.price + "$"}</h1>
        </div>
      ))}
    </div></>
  );
}
