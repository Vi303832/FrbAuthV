import React from 'react'
import { auth, provider } from "../Firebase.jsx"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom"

export const Auth = () => {
    const navigate = useNavigate();

    const SignInWithGoogle = async (e) => {
        e.preventDefault()
        try {
            const result = await signInWithPopup(auth, provider)

            const authInfo = {
                userID: result.user.uid,
                name: result.user.displayName,
                profilePhoto: result.user.photoURL,
                isAuth: true,

            }
            localStorage.setItem("auth", JSON.stringify(authInfo))
            navigate("/expense-tracker")
        } catch (error) {
            console.error(error)
        }

    }



    return (
        <div>
            <p>Sign in with Google to Continue</p>
            <button onClick={(e) => SignInWithGoogle(e)} className='border-2 rounded p-1 cursor-pointer'>
                Sign In With Google
            </button>




        </div>
    )
}

export default Auth