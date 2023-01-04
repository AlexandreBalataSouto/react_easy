import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import "./Auth.css";

const Auth = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <Profile></Profile>
    </>
  );
};

export default Auth;
