import React from 'react'
import { UserAuth } from '../context/UserContext';

const Navbar = () => {

  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch(error) {
      console.log(error)
    }
  } 
  return (
    <div className="navbar bg-gray-800 bg-base-100  sticky top-0 z-50">
    <div className="navbar-start">
      <a className="btn btn-ghost text-xl font-extrabold" >
      <img src="https://cdn-icons-png.flaticon.com/512/5671/5671959.png" className="h-10 w-10 rounded-full"></img>
        Let's Chat</a>
    </div>
    <div className="navbar-end">
     {currentUser? <a className="btn bg-red-700  hover:bg-red-800 " onClick={handleLogout}>Logout</a>: ""}
    </div>
  </div>
  )
}

export default Navbar