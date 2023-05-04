import React from 'react';
import {  signInWithPopup, 
          createUserWithEmailAndPassword, 
          onAuthStateChanged, 
          signInWithEmailAndPassword,
          signOut,
          updateProfile
        } from "firebase/auth";
import { useState }  from 'react';
import { auth } from '../../utils/firebase';
import { Router } from 'react-router-dom';
import { useRouter } from 'next/router';


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

  const handleSubmit = event => {
    console.log("handle submit rand")
    event.preventDefault();
    event.target.reset();
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h3 className="text-3xl text-sky-400 font-bold underline absolute top-0 p-4">Welcome to the app</h3>
      <div className="grid grid-cols-3 gap-4">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="border-2 p-2 m-2">
            <div className="pb-4">
            <label>Nombre</label>
              <input
                placeholder="Nombre..."
                required
                onChange={(event) => {
                  setRegisterName(event.target.value)
                }}
                className="flow-root m-2 p-2"
              />
              <label>Email</label>
              <input
                placeholder="Email..."
                required
                onChange={(event) => {
                  setRegisterEmail(event.target.value)
                }}
                className="flow-root m-2 p-2"
              />
              <label>Password</label>
              <input
                placeholder="Password..."
                required
                minLength={6}
                onChange={(event) => {
                  setRegisterPassword(event.target.value)
                }}
                className="flow-root m-2 p-2"
              />
            </div>
            <button onClick={register} type="submit" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Register User</button>
            <button onClick={() => GoogleSignIn()} type="submit" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-800">Log In With Google</button>
          </div>
        </form>

        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="border-2 p-2 m-2">
            <div className="pb-4">
              <label>Email</label>
              <input
                placeholder="Email..."
                onChange={(event) => {
                  setLoginEmail(event.target.value)
                }}
                className="flow-root m-2 p-2"
              />
              <label>Password</label>
              <input
                placeholder="Password..."
                onChange={(event) => {
                  setLoginPassword(event.target.value)
                }}
                className="flow-root m-2 p-2"
              />
            </div>
            <button onClick={login} type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Login User</button>
          </div>
        </form>

        <div className="relative">
          <h2>User Logged in:</h2>
          <div className="flow-root m-2 p-2">
            {user?.email}
          </div>
          <button onClick={logout} type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Sign Out</button>
        </div>
      </div>
    </div>
  )
}