import { useState } from "react";
import Stores from "../components/Stores";
import { getStores } from "../api/Stores-Data";
import Center from "../components/Center";

export function HomeScreen() {
  const [stores, setStores] = useState(getStores());

  return (
    <>
      <Center />
      <Stores stores={stores} />
    </>
  );
}