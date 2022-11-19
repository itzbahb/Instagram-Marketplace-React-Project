import { useState } from "react";
import SellerList from "../components/SellerList";
import { getSellers } from "../api/Users-Data";
import Center from "../components/Center";

export function HomeScreen() {
  const [sellers, setSeller] = useState(getSellers());

  return (
    <>
      <Center />
      <SellerList sellers={sellers} />
    </>
  );
}