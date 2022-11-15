import React from "react";
import NavBar from "./navBar";
import { Link } from "react-router-dom";
import { UserAuth } from "./authContext";
import { Button } from "@mui/material";
import Iframe from "react-iframe";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Home() {
  const { user, logout, setSearchBar } = UserAuth();

  const navigate = useNavigate();
  setSearchBar(false);
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <h1>{user?.email}</h1>
      <Iframe url="http://192.168.18.63/ReportViewer.aspx"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/>

      <Button variant="contained" onClick={handleLogout}>
        logout
      </Button>
    </>
  );
}

export default Home;
