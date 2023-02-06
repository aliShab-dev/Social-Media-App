import { createSlice } from "@reduxjs/toolkit";
import pic1 from '../../images/pic1.jpg'


const authUser = createSlice({
    name: 'authUserSlice',
    initialState: {
        currentUser: JSON.parse(localStorage.getItem('currentUser')) || {id:1, name: "Roberto", profilePic: pic1}
    },
  
})

export default authUser.reducer


