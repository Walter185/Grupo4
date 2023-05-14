import React from 'react';
import {  signInWithPopup, 
          createUserWithEmailAndPassword, 
          onAuthStateChanged, 
          GoogleAuthProvider,
          updateProfile
        } from "firebase/auth";
import { useState }  from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import { auth } from '../../utils/firebase';
import WithHeaderAndQuoteExample from '@/components/Footer';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

const MainNav = styled.div`
  font-size: 14px;
  background-color: #f4f4f4;
  padding: 16px;
  text-align: center;

  a {
    text-decoration: none;
    color: inherit;
  }

  span {
    color: #999;
  }
`;

const rotation = keyframes`
  from {
        transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }    
`;

const Div = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;

  p {
    line-height: 1.6;

    .bold {
      font-weight: 600;
    }
  }

  .box {
    border: 1px #eee solid;
    max-width: 500px;
    width: 100%;
    background-color: white;
    padding: 32px;
    margin: auto;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);

    .title {
      margin-top: 16px;
      text-align: center;

      .icon {
        filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.2));
      }
    }

    .server {
      border: 1px #ff4646 solid;
      color: #ff4646;
      border-radius: 6px;
      font-size: 14px;
      padding: 13px;
      margin-top: 24px;
      text-align: center;
    }

    .form {
      margin-top: 32px;
      font-size: 14px;

      .form-control {
        margin-bottom: 20px;

        input {
          display: block;
          font: inherit;
          color: inherit;
          width: 100%;
          padding: 13px 16px;
          outline: none;
          border: 1px #ccc solid;
          border-radius: 6px;

          &::placeholder {
            color: #aaa;
          }

          &:focus {
            border-color: #4a00e0;
          }
        }

        .hint {
          font-size: 13px;
          margin-top: 2px;
          margin-left: 4px;
          color: #ff4646;
          display: none;
        }

        &.error {
          input {
            border-color: #ff4646;
          }

          .hint {
            display: block;
          }
        }
      }

        .loader {
          width: 18px;
          height: 18px;
          border: 2px solid #fff;
          border-bottom-color: transparent;
          border-radius: 50%;
          display: block;
          animation: ${rotation} 1s linear infinite;
        }
      }
    }

    .info {
      margin-top: 32px;
      margin-bottom: 16px;
      text-align: center;
      font-size: 14px;

      a {
        text-decoration: none;
        color: #4a00e0;

        @media (hover: hover) {
          &:hover {
            text-decoration: underline;
          }
        }

        @media (hover: none) {
          &:active {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media (max-width: 640px) {
    .box {
      border: none;
      box-shadow: none;
      padding: 16px;
    }
  }
`;

export default function loginMail() {
  const route = useRouter();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [user, setUser] = useState({});
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

    console.log(result);
  }

  const handleSubmit = event => {
    console.log("handle submit rand")
    event.preventDefault();
    event.target.reset();
  }

  return (
 <>
       <Head>
        <title>Registrarse</title>
      </Head>
      <MainNav>
        <Link href="/">Home</Link> / <span>Registrarse</span>
      </MainNav>
      <Div>
        {user ? (
          <>
            <p>
              Usted ha iniciado sesión como: <span className="bold">{user.email}</span>.
              La página sera redirigida.
            </p>
          </>
        ) : (
          <>
          <div className="box">
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
               <a> </a><Button onClick={register} type="submit">Registrarse</Button>
           </form>
              <p className="info">
                Do you have an account? <Link href="/auth/login">Sign In</Link>
              </p><br/>
              <Button onClick={() => GoogleSignIn()} type="submit">Iniciar con Google</Button>

            <br/>
        </div>
        </>
        )}
      </Div><WithHeaderAndQuoteExample></WithHeaderAndQuoteExample>
    </>
  );
}