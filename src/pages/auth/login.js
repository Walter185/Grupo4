import React from 'react';
import {  signInWithPopup, 
          onAuthStateChanged, 
          signInWithEmailAndPassword,
          GoogleAuthProvider
        } from "firebase/auth";
import { useState }  from 'react';
import { auth } from '../../utils/firebase';
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
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
    text-align: center;

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
    }

    .loader {
      width: 18px;
      height: 18px;
      border: 2px solid #fff;
      border-bottom-color: transparent;
      border-radius: 50%;
      display: block;
      animation: ${rotation} 1s linear infinite;

      &.small {
        margin-left: 8px;
        width: 14px;
        height: 14px;
        border: 1.5px solid #4a00e0;
        border-bottom-color: transparent;
      }
    }

    .ext {
      margin-top: 32px;
      display: flex;
      justify-content: center;
      align-items: center;

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

        .icon {
          margin-left: 3px;
          width: 18px;
          height: 18px;
        }
      }
    }

    .info {
      margin-top: 24px;
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

   const handleSubmit = event => {
    console.log("handle submit rand")
    event.preventDefault();
    event.target.reset();
  }

  return (
    <>
    <Head>
    <title>Inicar sesión</title>
      </Head>
      <MainNav>
        <Link href="/">Home</Link> / <span>Iniciar sesión</span>
      </MainNav>
      <Div>
        {user ? (
          <>
            <p>
              Ha iniciado sesión como <span className="bold">{user.email}</span>.
              Usted será redirigido.
            </p>
          </>
        ) : (
          <>
              <div className="box">
              <form onSubmit={handleSubmit}>
                  <h3><b><u>Iniciar sesión</u></b></h3>
                      <div className="form-group">
                          <label>Email</label>
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
                      <label>Password</label>
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
                      <Button onClick={login} type="button">Login</Button> 

                        </form> 
                      <p className="info">
                      No tiene cuenta? <Link href="/auth/register">Registrarse</Link>
                      </p>
                  <br /><Button onClick={() => GoogleSignIn()} type="button">Iniciar con Google</Button>
             
              <br/><br/><br/>
            </div>
          </>
        )}
     
</Div>
</>

);
}
