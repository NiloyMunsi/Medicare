import { getAuth, signInWithPopup, GoogleAuthProvider, signOut , onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [ user, setUser]  = useState({});
    const [isloading, setIsloading] = useState(true);

    const auth = getAuth();
    
    const singInUseingGoogle = () => {
        setIsloading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        
            .then(result => {
                setUser(result.user);
            })
            .catch((error)=>console.log(error))
            .finally(()=>setIsloading(false));
        
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsloading(false)
        });
        return () => unsubscribe;
    }, [auth]);

    const logOut = () => {
        setIsloading(true);
        signOut(auth)
            .then(() => { })
        .finally(()=>setIsloading(false))
    }
    return {
        user,
        singInUseingGoogle,
        logOut,
        isloading
    }
}
export default useFirebase;