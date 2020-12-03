import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  function RenderProfile(user) {
    return (
    isAuthenticated && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.locale}</p>
        <p>{user.email_verified}</p>
        <p>{user.sub}</p>
        <img src={user.picture} alt={user.name} className='img' />
      </div>
    )
    )
  }

  return <div>{RenderProfile(user)}</div>;
};

export default Profile;
