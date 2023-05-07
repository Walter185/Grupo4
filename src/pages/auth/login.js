import React from 'react';
import {  signInWithPopup, 
          onAuthStateChanged, 
          signInWithEmailAndPassword,
          GoogleAuthProvider
        } from "firebase/auth";
import { useState }  from 'react';
import { auth } from '../../utils/firebase';
import { useRouter } from 'next/router';
import WithHeaderAndQuoteExample from '@/components/Footer';


export default function loginMail() {
  const route = useRouter();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      
      route.push('/');
    } catch(error) {
      console.log(error.message);
    }
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
  }, [])

  const GoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    const authorization = auth;
    const result = await signInWithPopup(authorization, provider);
    route.push('/');
    console.log(result);
  }

  const volver = event => {
    route.push('/');
  }

  const iraRegistrarse = event => {
    route.push('/auth/register')
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
            <h3><b><u>Iniciar sesión</u></b></h3>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        placeholder="Ingrese e-mail..."
                        onChange={(event) => {
                          setLoginEmail(event.target.value)
                        }}
                        className="form-control"
                        required
                        type='email'
                      />
                </div>
                <div className="form-group">
                <label>Password</label>
                      <input
                        placeholder="Password..."
                        onChange={(event) => {
                          setLoginPassword(event.target.value)
                        }}
                        className="form-control"
                        required
                      />
                </div>
            
              <br />
                <button onClick={login} type="button"  className="btn btn-dark btn-lg btn-block">Login</button>
                <a> </a><button type='button' onClick={iraRegistrarse} className="btn btn-dark btn-lg btn-block"> Registrarse</button>
                <a> </a><button onClick={() => GoogleSignIn()} type="button" className="btn btn-dark btn-lg btn-block">Iniciar con Google</button>
                <a> </a><button type='button' onClick={volver} className="btn btn-dark btn-lg btn-block"> Inicio</button>
        </form>
      <br/><br/><br/><br/><br/>
    </div><WithHeaderAndQuoteExample></WithHeaderAndQuoteExample>
</div>

     
  );
}