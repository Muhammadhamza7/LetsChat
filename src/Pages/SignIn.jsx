import React, { useEffect } from 'react'
import { UserAuth } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate=useNavigate();
const {currentUser,signInwithGoogle}=UserAuth();
console.log(currentUser);

const handleLogin=async()=>{
  try{
   await  signInwithGoogle();
  }catch(error){
  console.log(error)
  }
}

useEffect(() =>{
  if(currentUser){
    navigate("/chat")
  }
},[currentUser])
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-yellow-tourism-trolley-case-to-chat-with-image_13961.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-6xl font-bold">Wellcome Back Fellaz! 👋​</h1>
      <p className="mb-5">
      "Welcome to Let’s Chat – Where conversations flow and connections grow."
      </p>
      <button className="btn " onClick={handleLogin}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 48 48"
    className="mr-2"
  >
    <path fill="#4285F4" d="M23.49 12.27c1.88 0 3.55.65 4.89 1.7l3.62-3.56C28.82 8.17 26.27 7 23.49 7c-4.54 0-8.37 2.6-10.29 6.38l3.74 2.91c1.05-3.11 4.03-5.02 7.03-5.02z" />
    <path fill="#34A853" d="M13.21 25.6c-.52-1.55-.8-3.21-.8-4.94s.28-3.39.8-4.94l-3.74-2.91c-1.17 2.32-1.84 4.94-1.84 7.85s.67 5.53 1.84 7.85l3.74-2.91z" />
    <path fill="#FBBC05" d="M23.49 33c-3 0-5.58-1.25-7.25-3.25l-3.74 2.91c1.93 3.78 5.76 6.38 10.29 6.38 2.78 0 5.33-1.17 7.02-3.11l-3.62-3.56c-1.35 1.04-3.02 1.69-4.9 1.69z" />
    <path fill="#EA4335" d="M41 25.56v-4.62H24v7.5h9.84c-1.01 2.6-3.24 4.63-6.35 5.33l3.62 3.56c4.58-2.2 7.64-6.83 7.64-12.27z" />
  </svg>
  Sign in with Google
</button>
    </div>
  </div>
</div>
  )
}

export default SignIn