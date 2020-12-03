import React from 'react'
import LoginButton from './components/Login.jsx'
import Logout from './components/Logout.jsx'
import Profile from './components/Profile.jsx'
import './styles/styles.css'

function App() {
  return (
    <div className="divzola">
    <LoginButton/>
    <Logout/>
    <Profile/>
    </div>
  );
}

export default App;
