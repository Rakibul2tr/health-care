import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword ,signInWithEmailAndPassword    } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitialaz from "../Firebase/Firebase.int";


FirebaseInitialaz()
const useFirebase=()=>{

    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [error,seterror]=useState('');
    const [isLoding,setIsloding]=useState(true);
    const googleprovider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user,setuser]=useState({})

    const googlesingin=()=>{
      setIsloding(true);
     return signInWithPopup(auth, googleprovider)
      
     .finally(()=>setIsloding(false));
        
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setuser(user)
            } 
            setIsloding(false);
          });
    },[])


    const LogOut=()=>{
      setIsloding(true);
        signOut(auth)
        .then(() => {
            setuser({})
          })
        .finally(()=>setIsloding(false));
    }

    // =======createUserWithEmailAndPassword========

    const emailhendal=(e)=>{
      setemail(e.target.value)
      console.log(email);
    }
    const passwordhendal=(e)=>{
      setpassword(e.target.value)
      console.log(password);
    }

    const createPassworsubmitHendel=e=>{
      e.preventDefault()
      if(password.length<6){
        seterror("Give at list 6 diget.")
        return;
      }
      if(/^(?=.*[A-Z])$/.test(password)){
        seterror("Give an uppercase letter")
        return;
      }
      createUserWithEmailAndPassword(auth,email,password)
      .then(result=>{
        const user=result.user;
        console.log(user);
        seterror('')
      })
      .catch((error) => {
        seterror(error.message);
      });

    }
    const LoginPassworsubmitHendel=(e)=>{
      e.preventDefault();
      if(password.length<6){
        seterror("Give at list 6 diget.")
        return;
      }
      
      signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        seterror(error.message);
      });
    };


    return {
             user,
             error,
             LogOut,
            googlesingin,
            isLoding,
            emailhendal,
            passwordhendal,
            createPassworsubmitHendel,
            LoginPassworsubmitHendel
            
    }
}

export default useFirebase;