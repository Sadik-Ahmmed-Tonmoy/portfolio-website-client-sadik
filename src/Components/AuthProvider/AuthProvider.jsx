import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../Firebase/Firebase.config';
import { useEffect } from 'react';


export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  
  const googleProvider = new GoogleAuthProvider();

  // create new user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // update profile
  const updateProfileImage = (name, image_url) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image_url,
    })
  }

  // email login
  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // goolgle login
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // logout
  const logOut = () => {
    setLoading(true)
    localStorage.removeItem('access-token')
   return signOut(auth)
  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
       setUser(user)
       setLoading(false)
      } 
    });
    return () => {
      return unsubscribe()
    }
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    updateProfileImage,
    logIn,
    googleLogin,
    logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;