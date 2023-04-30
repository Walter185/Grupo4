import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const route = useRouter();

    if(loading) return <h1>Loading..</h1>
    if(!user) route.push('/auth/login')
    if(user)
        return (
            <div >
                <h1 >Welcome to your dashboard <span >{user.displayName}</span></h1>
                <button onClick={() => auth.signOut()}>
                            Sign out
                </button>
            </div>
        )
}

export default Dashboard;