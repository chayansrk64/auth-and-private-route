import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        setLoading(true)
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
        signInWithGoogle,
        signOutUser
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;