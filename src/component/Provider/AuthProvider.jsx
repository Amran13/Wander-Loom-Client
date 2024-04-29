import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase.config';


export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app)

    //Email Password Authentication
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }

    //Google Authentication
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //Github Authentication
    const githubProvider = new GithubAuthProvider();
    const loginWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    //Facebook Authentication


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('currentUser : ', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            console.log('unsubscribe')
            unsubscribe()
        }
    }, [])

    

    const authInfo = {
        createUser,
        loginUser,
        logOut,
        user,
        loading,
        loginWithGoogle,
        loginWithGithub,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;