import { createSlice } from "@reduxjs/toolkit";
import img from '../../images/img.jpg'


const authUser = createSlice({
    name: 'authUserSlice',
    initialState: {
        currentUser: JSON.parse(localStorage.getItem('currentUser')) || {id:1, name: "Roberto", profilePic: img}
    },
  
})

export default authUser.reducer


