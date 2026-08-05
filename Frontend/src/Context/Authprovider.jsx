import React, { createContext, useContext } from "react";
import { useState } from "react";

export const Authcontext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("user");

  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined,
  );

  return (
    <Authcontext.Provider value={[authUser, setAuthUser]}>
      {children}
    </Authcontext.Provider>
  );
}

export const useAuth = () => useContext(Authcontext);
