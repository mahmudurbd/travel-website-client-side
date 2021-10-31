import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const auth = getAuth();

    // google login
    const googleLogin = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider)
       /*  .then(result => {
            setUser(result.user);
        }) */
        .finally(() => setIsLoading(false));
    }

    // observer
    useEffect(() => {
        const unsubscribed =  onAuthStateChanged (auth,user => {
            if(user) {
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed
    },[])

    // logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {})
        .finally(() => setIsLoading(false));
    }


    return {
        user,
        googleLogin,
        logOut,
        isLoading
    }
}
export default useFirebase;