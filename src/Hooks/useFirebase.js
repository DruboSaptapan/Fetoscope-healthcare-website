import { useEffect, useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        // signInWithPopup(auth, googleProvider)
        // .then(result =>{
        //     const googleUser = result.user;
        //     console.log(googleUser)
        // })
        return signInWithPopup(auth, googleProvider)
    }

    const signInUsingGithub = () => {
        // signInWithPopup(auth, githubProvider)
        // .then(result =>{
        //     const githubUser = result.user;
        //     console.log(githubUser)
        // })
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .catch(error =>{})
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
        return unsubscribe;
    }, [])

    return { user, signInUsingGoogle, signInUsingGithub, logOut }
}

export default useFirebase;