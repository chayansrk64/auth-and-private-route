import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }


    // get the current signed in user
    useEffect(() => {
        // set the observer
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user onAuthStateChange', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        // clear the observer on mount
        return () => {
            unsubscribe()
        }
    }, [])

    // onAuthStateChanged(auth, (currentUser) => {
    //     if(currentUser){
    //         console.log('Current User: if', currentUser);
    //     }else{
    //         console.log('Current User: else', currentUser);
    //     }
    // })

    const userInfo = {
        user,
        loading,
        createUser,
        loginUser,
        signOutUser
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;