import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Home from "./home.js";
import Products from "./products";
import Currency from "./currency";
import { AuthContextProvider } from "./authContext";
import NavBar from "./navBar";
import ProtectedRoute from "./protectedRoute";

export default function Routing() {
  return (
<AuthContextProvider>
  <NavBar />
  
<Routes>
      <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
      <Route path="/currency" element={<Currency />} />
      <Route path="/products" element={<Products />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
</AuthContextProvider>
   

  );
}
