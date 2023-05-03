import {FcGoogle} from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';


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
            <h2 className='text-3xl font-medium'>Pedilo Ya!!</h2>
            <div className='py-4'>
                <h3 className='py-4'>Elija su forma mas cómoda de registrarse.</h3>
            </div>
            <div className='flex flex-col gap-4'>
                <button onClick={GoogleLogin} className='btn'>
                    <FcGoogle className='text-2xl' />Ingrese con Google
                </button>
            </div>
            <div className="other-logins">
                    <Link href={"/login/telefone"}>
                      <button className='btn btn-other lite-shadow' disabled>
                        <span className="btn-label">Telefone</span>
                      </button>
                      </Link>
                    <Link href={"/auth/loginMail"}>
                      <button className='btn btn-other lite-shadow'>
                        <span className="btn-label">Email</span>
                      </button>
                    </Link>
                   
                  </div>
                   <p>Si no tiene cuenta, por favor registrese.</p>
                  <div>
                    <Link href={'/auth/register'} className="font-text">
                      Registrate
                    </Link>
                  </div>   
            </div>      
            </div>      
            </div>
    )
}

export default Login;