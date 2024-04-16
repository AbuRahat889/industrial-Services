import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Components/firebase";


export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    //create user
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //sign in user
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //user effect 
    useEffect(()=>{
        onAuthStateChanged(auth, currentUse=>{
            
        })
    },[])
    const authInfo = {user, createUser, signIn }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;