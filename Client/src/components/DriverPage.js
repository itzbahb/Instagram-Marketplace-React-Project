import { useParams } from "react-router-dom";
import { getUser } from "../api/Users-Data";

export default function DriverPage() {
  let params = useParams();
  let driverId = params.driverId;

  let { username, page} = getUser(driverId);

  return (
    <>
    <div className='center'>
      <h1>{username}</h1>
      <p>All Items Available Today</p>
    </div>

    <div className="listings">
      {page.map((post) => (
        <div className="listing" key={post.postId}>
          <img src={post.source}></img>
          <h1>{post.title}</h1>
          <h1>{post.price + "$"}</h1>
        </div>
      ))}
    </div></>
  );
}
