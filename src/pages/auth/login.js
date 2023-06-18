import React from 'react';
import {  signInWithPopup, 
          onAuthStateChanged, 
          signInWithEmailAndPassword,
          GoogleAuthProvider
        } from "firebase/auth";
import { useState }  from 'react';
import { auth } from '../../utils/firebase';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import styles from '@/styles/Login.module.css';
import { FaGoogle } from "react-icons/fa";


export default function loginMail() {
  const route = useRouter();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  const [ t, i18n ] = useTranslation ("traduccion");

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

   const handleSubmit = event => {
    console.log("handle submit rand")
    event.preventDefault();
    event.target.reset();
  }

  return (
    <>
    <br></br>
      <div className={styles.container}>
        {user ? (
          <>
            <p>
              Ha iniciado sesión como <span className="bold">{user.email}</span>.
              Usted será redirigido.
            </p>
          </>
        ) : (
          <>
              <div className={styles.box}>
              <form onSubmit={handleSubmit}>
                  <h3><b><u> { t ( "navbar.ingresar")}</u></b></h3>
                      <div className="form-group">
                          <label>{ t ( "login.email")}</label>
                          <input
                               type="email"
                               name="email"
                               id="email"
                              required
                              placeholder="Ingrese e-mail..."
                              onChange={(event) => {
                                setLoginEmail(event.target.value)
                              }}
                              className="form-control"
                              />
                      </div>
                      <div className="form-group">
                      <label> { t ( "login.password")}</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                minLength={6}
                                placeholder="Password"
                                 onChange={(event) => {
                                setLoginPassword(event.target.value)
                              }}
                              className="form-control"
                            />
                      </div><br/>
                      <Button onClick={login} type="submit">{t ( "login.btn") }</Button> 

                        </form> 
                      <p className="info">
                      {t ("login.noregistrado")} <Link href="/auth/register">{t ( "register.titulo") }</Link>
                      </p>
                  <br /><Button id='btnGoogle' onClick={() => GoogleSignIn()} type="submit"><a><FaGoogle/> {t ("login.google")}</a></Button>
             
              <br/><br/><br/>
            </div>
          </>
        )}
     
</div>
</>

);
}
