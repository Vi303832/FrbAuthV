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
        <div className='bg-gradient-to-r
        from-orange-400
        via-orange-300/65
        to-yellow-50/80
        
        h-screen
        flex 
        flex-col
        
        items-center
        justify-center
        gap-7
        
        '>
            <div className='flex flex-col  items-center justify-center gap-2'>
                <p className='font-bold text-2xl '>Sign in with Google to Continue</p>
                <div>

                    <hr className='w-sm'></hr>
                    <hr className='w-sm'></hr>

                </div>

            </div>


            <button onClick={(e) => SignInWithGoogle(e)} className='border-2 rounded-2xl py-1 px-5 cursor-pointer bg-white hover:bg-amber-200 flex gap-2 items-center'>
                <img className="w-7" src='https://w7.pngwing.com/pngs/882/225/png-transparent-google-logo-google-logo-google-search-icon-google-text-logo-business-thumbnail.png'></img>Sign In
            </button>




        </div>
    )
}

export default Auth