import React from 'react'
import { db } from '../Firebase'

export const useGetuserİnfo = () => {
    const { name, profilePhoto, userID, isAuth } = JSON.parse(localStorage.getItem("auth"))
    return {
        name, profilePhoto, userID, isAuth
    }
}

export default useGetuserİnfo