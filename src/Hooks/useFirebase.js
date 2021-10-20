import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    };

    const signInUsingGithub = () => {
        setIsLoading(true);
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password At Least 6 Character')
            return;
        }
        else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        else if (error.message == '(auth/email-already-in-use)') {
            alert("Oops! email already in use.");
        }

        else {
            alert("User has been Created. Please Sign in!");
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                setError(error.message)
            });
    }

    const handleSignIn = (e) => {
        e.preventDefault();

        // if ((password.length <= 6) && (/(?=.*[A-Z].*[A-Z])/.test(password))) {
        //     alert("Sign In Successfully.");
        // }

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    };

    // observation to user state change when signIn or signOut
    // it observes that 

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    return {
        user,
        error,
        isLoading,
        logOut,
        signInUsingGoogle,
        signInUsingGithub,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleSignIn
    }
};

export default useFirebase;