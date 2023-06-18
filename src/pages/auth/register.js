import React from 'react';
import {  signInWithPopup, 
          createUserWithEmailAndPassword, 
          onAuthStateChanged, 
          GoogleAuthProvider,
          updateProfile
        } from "firebase/auth";
import { useState }  from 'react';
import Link from 'next/link';
import { auth } from '../../utils/firebase';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import styles from '@/styles/Register.module.css';
import { FaGoogle } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


export default function loginMail() {
  const route = useRouter();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [user, setUser] = useState({});
  const [ t, i18n ] = useTranslation ("traduccion");
  const [serverErrorMessage, setServerErrorMessage] = useState('');

  const nameInputHandler = (ev) => {
    setServerErrorMessage('');
    setNameInput(ev.target.value);
  };

  const emailInputHandler = (ev) => {
    setServerErrorMessage('');
    setEmailInput(ev.target.value);
  };

  const passwordInputHandler = (ev) => {
    setServerErrorMessage('');
    setPasswordInput(ev.target.value);
  };
  const register = async () => {
    try {
      setRegisterEmail("");
      setRegisterPassword("");
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword).then(async  =>{
        (userCredential) => {
          const uid = userCredential.user.uid;
          setDoc(doc(db, uid, 'account'), {
            name: registerName,
            email: registerEmail,
          })
          .then(() => {
            setDoc(doc(db, uid, 'wishlist'), {
              items: [],
            }).then(() => {
              setDoc(doc(db, uid, 'cart'), {
                items: [],
              });
            });
          })
          .catch((error) => {
            console.log(error);
          }) .catch((error) => {
            const errorCode = error.code;
  
            if (errorCode === 'auth/email-already-in-use') {
              setServerErrorMessage('Email address already in use.');
            } else {
              setServerErrorMessage('Something went wrong.');
            }
          });}
      })
      route.push('/');
      console.log(user);
    } catch(error) {
      console.log(error.message)
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
              Usted ha iniciado sesión como: <span className="bold">{user.email}</span>.
              La página sera redirigida.
            </p>
          </>
        ) : (
          <>
              <div className={styles.box}>
            <form onSubmit={handleSubmit}>
             <h3><b><u>{ t ( "register.titulo")}</u></b></h3>

                <div className="form-group">
                <label>{ t ( "login.nombre")}</label>
                      <input
                        placeholder={ t ( "login.nombre")}
                        required
                        onChange={(event) => {
                          setRegisterName(event.target.value)
                        }}
                        className="form-control"
                      />
                </div>
                <div className="form-group">
                <label>{ t ( "login.email")}</label>
                      <input
                        placeholder={ t ( "login.email")}
                        required
                        onChange={(event) => {
                        setRegisterEmail(event.target.value)
                        }}
                        className="form-control"
                      />
                </div>
                <div className="form-group">
                <label>{ t ( "login.password")}</label>
                      <input
                        placeholder={ t ( "login.password")}
                        required
                        minLength={6}
                        onChange={(event) => {
                        setRegisterPassword(event.target.value)
                        }}
                        className="form-control"
                      />
              <br />   </div>
               <a> </a><Button onClick={register} type="submit">{ t ( "register.titulo")}</Button>
           </form>
              <p className="info">
              {t ("login.noregistrado")}  <Link href="/auth/login">{ t ( "login.titulo")}</Link>
              </p><br/>
              <Button onClick={() => GoogleSignIn()} type="submit"><a><FaGoogle/> {t ("login.google")}</a></Button>

            <br/>
        </div>
        </>
        )}
      </div>
    </>
  );
}