import { createContext, useContext, useState } from "react";

let userContext = createContext();

export default function UserContextProvider(props) {
  const [user, setUser] = useState();

  return (
    <userContext.Provider value={{ user, setUser }}>
      {props.children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  return useContext(userContext);
}
