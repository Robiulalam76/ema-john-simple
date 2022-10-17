import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext()

const UserContext = ({ children }) => {
    const [user, setUser] = useState()
    const [loadding, setLoadding] = useState(true)


    const signUpWithEmail = (email, password) => {
        setLoadding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInWithEmail = (email, password) => {
        setLoadding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoadding(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
            setUser(currenUser)
            setLoadding(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const useInfo = { user, loadding, signUpWithEmail, logOut, logInWithEmail }
    return (
        <AuthContext.Provider value={useInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;