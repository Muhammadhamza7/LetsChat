import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignIn from './Pages/SignIn'
import Navbar from './Components/Navbar'
import './App.css'
import Chat from './Pages/Chat'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import PriRoute from './routes/PriRoute'
import { AuthProvider } from './context/UserContext'

function App() {
 
  return (
   
     <div>
      <AuthProvider>
      <Navbar/>
      <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/chat" element=
     { <PriRoute>
      <Chat/>
      </PriRoute>}/>
      </Routes>
      </AuthProvider>
   </div>
  )
}

export default App
