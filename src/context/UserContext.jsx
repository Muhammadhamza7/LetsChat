import { GoogleAuthProvider,signInWithPopup, signOut} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth/cordova";
import { Children, createContext, useContext,useEffect,useState } from "react";
import { auth } from "../firebase";

const UserContext=createContext();

export const AuthProvider=({children})=>{

    const[currentUser,setCurrentUser]=useState(null);
    const [loading, setLoading] = useState(true);

    const signInwithGoogle=()=>{
       
        const provider = new GoogleAuthProvider();
    
    // Use signInWithPopup instead of signInWithRedirect
    signInWithPopup(auth, provider)
        
    }
    const logout =()=>signOut(auth);
    const value={
        currentUser,
        setCurrentUser,
        signInwithGoogle,
        logout
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    },[]);
    return(
        <UserContext.Provider value={value}>
               {!loading && children}
        </UserContext.Provider>
    )
}
export const UserAuth=()=>{
    return useContext(UserContext);
};