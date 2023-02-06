import { useContext, useEffect, useState } from 'react'
import './App.scss'
import Login from './Login/Login'
import Register from './Register/Register'
import { Outlet, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import RightBar from './components/rightBar/RightBar'
import LeftBar from './components/leftBar/LeftBar'
import Home from './Home/Home'
import Profile from './profile/Profile'
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import { useSelector } from 'react-redux'
import { current } from '@reduxjs/toolkit'


function App() {

   const darkMode = useSelector(state => state.darkMode.darkMode)
   const currnetUser = useSelector(state => state.authUser.currentUser)


  const ProtectedRoute = ({children})=> {
    if(!currnetUser){
     return <Navigate to={'/login'}/>
    }
    return children
  }
  
  const Layout = () => {
    return(
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
      

        <NavBar/>
        <div style={{ display: "flex"}}> 
          <LeftBar/>
          <div style={{flex: 5 }}>
          <Outlet/>
          </div>
          <RightBar/>
        </div>

      </div>
    )
  }

  return (
<BrowserRouter>
  <Routes>
    <Route path='/' element={
      <ProtectedRoute>
    <Layout/>
      </ProtectedRoute>
    
    } >
      <Route path='/' element={<Home/>}></Route>
      <Route path='/profile/:id' element={<Profile/>}></Route>
    </Route>

    <Route path='/login' element={<Login/>}></Route>

    <Route path='/register' element={<Register/>}></Route>

  </Routes>
</BrowserRouter>

  )
}

export default App
