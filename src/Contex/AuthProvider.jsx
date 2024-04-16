import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
        return signInWithEmailAndPassword(auth, email, password);
    }
    //sign out 
    const logOut = ()=>{
        return signOut(auth);
    }

    //user effect 
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('observe ', currentUser);     
        });
        return ()=>{
            unsubscribe();
        }
    },[])


    const authInfo = {user, createUser, signIn, logOut }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;