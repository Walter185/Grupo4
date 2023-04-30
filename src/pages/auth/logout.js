import { signOut } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useRouter } from 'next/router';

const LogOut = () => {
    const route = useRouter();
    auth.signOut();
    route.push('/');
}

export default LogOut;