import { useState } from "react";
import Stores from "../components/Stores";
import { getStores } from "../api";

export function HomeScreen() {
  const [stores, setStores] = useState(getStores());
  
  return <Stores stores={stores} />;
}