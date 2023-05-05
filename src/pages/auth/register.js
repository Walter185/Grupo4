import React from 'react';
import {  signInWithPopup, 
          createUserWithEmailAndPassword, 
          onAuthStateChanged, 
          signInWithEmailAndPassword,
          signOut,
          GoogleAuthProvider,
          updateProfile
        } from "firebase/auth";
import { useState }  from 'react';
import { auth } from '../../utils/firebase';
import { Router } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import { useRouter } from 'next/router';
import WithHeaderAndQuoteExample from '@/components/Footer';


export default function loginMail() {
  const route = useRouter();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  const register = async () => {
    try {
      setRegisterEmail("");
      setRegisterPassword("");
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword).then(async  =>{
         updateProfile(auth.currentUser, {displayName: registerName})
      })
      route.push('/')
      console.log(user);
    } catch(error) {
      console.log(error.message)
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      route.push('/')
      console.log(user);
    } catch(error) {
      console.log(error.message);
    }
  }

  const logout = async () => {
    await signOut(auth);
    console.log("user logged out");
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
  }, [])

  const GoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    const authorization = auth;
    const result = await signInWithPopup(authorization, provider);

    console.log(result);
  }

  const volver = event => {
    route.push('/')
  }

  const iraLogin = event => {
    route.push('/auth/login')
  }
  const handleSubmit = event => {
    console.log("handle submit rand")
    event.preventDefault();
    event.target.reset();
  }

  return (
 
<div style={{ backgroundImage: "url(/background.png)", backgroundRepeat: 'no-repeat'}}>
<div className='formLogin'>
<form onSubmit={handleSubmit}>

      <h3><b><u>Registrarse</u></b></h3>

        <div className="form-group">
        <label>Nombre</label>
              <input
                placeholder="Nombre..."
                required
                onChange={(event) => {
                  setRegisterName(event.target.value)
                }}
                className="form-control"
              />
        </div>
        <div className="form-group">
        <label>Email</label>
              <input
                placeholder="Email..."
                required
                onChange={(event) => {
                  setRegisterEmail(event.target.value)
                }}
                className="form-control"
              />
        </div>
        <div className="form-group">
        <label>Password</label>
              <input
                placeholder="Password..."
                required
                minLength={6}
                onChange={(event) => {
                  setRegisterPassword(event.target.value)
                }}
                className="form-control"
              />
       <br />   </div>
       <a> </a><button onClick={register} type="button" className="btn btn-dark btn-lg btn-block">Registrarse</button>
       <a> </a><button type='button' onClick={iraLogin} className="btn btn-dark btn-lg btn-block"> Login</button>
    
       <a> </a><button onClick={() => GoogleSignIn()} type="button" className="btn btn-dark btn-lg btn-block">Iniciar con Google</button>
      <a> </a><button type='button' onClick={volver} className="btn btn-dark btn-lg btn-block"> Inicio</button>
    </form>
    <br/><br/><br/>
</div><WithHeaderAndQuoteExample></WithHeaderAndQuoteExample>
</div>




  )
}