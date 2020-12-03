import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/styles.css'

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
    <button onClick={() => logout({ returnTo: window.location.origin })} className="button">
      Log Out
    </button>
  )
  )
};

export default LogoutButton;