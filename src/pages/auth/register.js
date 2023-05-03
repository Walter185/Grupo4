import { useState } from 'react';
import { useRouter } from 'next/router';
import { firestore } from '@/utils/firebase';
import { auth } from '@/utils/firebase';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await firestore.collection('users').doc(user.uid).set({
        name,
        email,
        createdAt: serverTimestamp(),
      });
      router.push('/');
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
               <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;



// import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, updateProfile, User, UserCredential } from 'firebase/auth';
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { auth, firestore } from '../../utils/firebase';


// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleRegister = async (event) => {
//     // event.preventDefault();
//     try {
//       const { user } = await auth.createUserWithEmailAndPassword(email, password);
//       await firestore.collection('users').doc(user.uid).set({
//         name,
//         email,
//         createdAt: serverTimestamp(),
//       });
//       router.push('/');
//     } catch (error) {
//       console.log('Error: ', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={handleRegister}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//         />
       
//        <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
