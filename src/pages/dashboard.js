import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const route = useRouter();


    const volver = event => {
        route.push('/');
      }

    if(loading) return <h1>Loading..</h1>
    if(!user) route.push('/auth/login')
    if(user)
        return (
            <div style={{ backgroundImage: "url(/background.png)", backgroundRepeat: 'no-repeat', heigth:'100%'}}>
  <br/>  <br/>
            <div className='form-group-profile'>
                <div className='form-item'>
                                    <h1 >Bienvenido a Pedilo Ya, <img src={user.photoURL}></img></h1>
                                    <br/>
                </div>
                <div className='form-item'>
                                    <h3 >Nombre: <span >{user.displayName}</span></h3>

                </div>
                <div className='form-item'>
                                    <h3 >email: <span >{user.email}</span></h3>

                </div>
                <div className='form-item'>
                                    <h3 >ID: <span >{user.uid}</span></h3>

                </div>
                <div className='form-item'>
                                    <h3 >Telefono: <span >{user.phoneNumber}</span></h3>

                </div>
                <div className='form-item'>
                                    <h3 >Ultima conexion: <span >{user.metadata.lastSignInTime}</span></h3>

                </div>
                <div className='form-item'>
                                    <h3 >Domicilio: <span ></span></h3>

                </div>
                <br/>  <br/>   <br/>  <br/>   <br/>  <br/>
                <button  type='button' onClick={() => auth.signOut()} className="btn btn-dark btn-lg btn-block">
                            Logout
                </button>
                <a> </a><button type='button' onClick={volver} className="btn btn-dark btn-lg btn-block"> Volver</button>

            </div>
            </div>
        )
}

export default Dashboard;