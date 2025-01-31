import React from 'react'
import { auth, provider } from "../Firebase.jsx"
import { signInWithPopup } from 'firebase/auth'

export const Auth = () => {


    const SignInWithGoogle = async () => {

        const result = await signInWithPopup(auth, provider)

        const authInfo = {
            userID: result.user.uid,
            name: result.user.displayName,
            profilePhoto: result.user.photoURL,
            isAuth: true,

        }
        localStorage.setItem("auth", JSON.stringify(authInfo))

    }



    return (
        <div>
            <p>Sign in with Google to Continue</p>
            <button onClick={SignInWithGoogle} className='border-2 rounded p-1 cursor-pointer'>
                Sign In With Google
            </button>




        </div>
    )
}

export default Auth