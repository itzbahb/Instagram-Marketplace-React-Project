import { useParams } from 'react-router-dom';
import { getStore } from '../api';

export default function StoreListing() {
  let params = useParams();
  console.log(params)
  let storeId = params.storeId;

  let { items } = getStore(storeId);
  return (
    <div className='listings'>
      {items.map(item => (
        <div className='listing' key={item.itemId}>
          {JSON.stringify(item)}
        </div>
      ))}
    </div>
  );
}