import { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  auth
} from "./firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [searchBar, setSearchBar] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //for signup

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //for signin

  const logout = () => {
    return signOut(auth);
  };
  //for logout

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  //to get data(currentUser builtin firebase function) from firebase

  return (
    <UserContext.Provider value={{ createUser, user, loginUser, logout,searchBar, setSearchBar }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
