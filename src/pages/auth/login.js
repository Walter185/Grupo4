import {FcGoogle} from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Login = () => {
    const route = useRouter();
    const [user, loading] = useAuthState(auth)
    //Sign in with google
    const goodleProvider = new GoogleAuthProvider();
    
    const GoogleLogin = async () => {
        try{
            const result = await signInWithPopup(auth, goodleProvider)
            route.push('/');
        } catch (error) {
            error
        }
    };

    useEffect(() => {
        if(user) {
            route.push('/');
        } else {
            console.log('login');
        }
    }, [user])

    return (
        
        <div className="container-login">
          
        <div className="container">
        <div className="rounded-background"></div>
          <div className="image-left">
            <LazyLoadImage src={'../motito.jpg'} alt="" className="motito" />
          </div>
        <div className="container2">
            <h2 className='text-3xl font-medium'>Join Today</h2>
            <div className='py-4'>
                <h3 className='py-4'>Sign in with one of the providers</h3>
            </div>
            <div className='flex flex-col gap-4'>
                <button onClick={GoogleLogin} className='text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2'>
                    <FcGoogle className='text-2xl' /> Sign in with Google
                </button>
            </div>
            </div>      </div>      </div>
    )
}

export default Login;