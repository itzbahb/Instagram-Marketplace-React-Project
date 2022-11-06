import { getClothesStore } from "../api"

export default function ClothesScreen() {
  let { items } = getClothesStore();

  return (
    <div class='listings'>
    {items.map(item => (
      <div class='listing' key={item.itemId}>
        {JSON.stringify(item)}
      </div>
    ))}
    </div>
  );
}