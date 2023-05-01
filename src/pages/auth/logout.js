import { auth } from '../../utils/firebase';
import { useRouter } from 'next/router';

const LogOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
      // display an error message to the user
    }
  };

  handleSignOut();
};

export default LogOut;
