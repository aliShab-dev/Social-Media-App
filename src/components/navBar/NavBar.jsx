import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import { changeMode } from "../darkMode/darkMode";
import { useState } from "react";

const NavBar= () =>{
    const dispatch = useDispatch()
    const darkMode = useSelector(state =>state.darkMode.darkMode)
    const currentUser = useSelector(state =>state.authUser.currentUser)

    
    return(
        <div className="navbar">
            <div className="left">
                <Link to={"/"} style={{ textDecoration:"none" }}>
                    <span>Ali's SNS</span>
                </Link>
            
                <HomeOutlinedIcon/>
               {darkMode ? <DarkModeOutlinedIcon onClick={()=>dispatch(changeMode())}/> : <LightModeTwoToneIcon onClick={()=>dispatch(changeMode())}/>}
                <GridViewOutlinedIcon/>

                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder='Search' />
                </div>
                
            </div>
            <div className="right"> 
                <PersonOutlineOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsNoneOutlinedIcon/>

                <div className='user'>
                    <img src={currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar