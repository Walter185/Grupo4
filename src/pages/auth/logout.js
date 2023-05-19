import { auth } from '../../utils/firebase';
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';

const signOutHandler = () => {
    const router = useRouter();

  signOut(auth)
    .then(() => {
   router.push('/');  
    })
    .catch((error) => {
      console.log(error);
    });
};

export default signOutHandler;

