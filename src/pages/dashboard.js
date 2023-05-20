import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import MainContextProvider, { maincontextState } from '@/context/maincontextprovider';
import styles from '@/styles/Dashboard.module.css';
import FooterGrid from '@/components/footer/Footer';
import Barra from '@/components/navbar/Navbar';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const route = useRouter();
    let context = useContext(maincontextState);
    let darkMode = context.darkMode;


    const volver = event => {
        route.push('/');
      }

    if(loading) return <h1>Loading..</h1>
    if(!user) route.push('/auth/login')
    if(user)
        return (
            <>  
            <MainContextProvider>
            <Barra></Barra> 
            <br></br><br></br><br></br>
            <div className={darkMode ? styles.dark : styles.light}>
            <p className="title">Bienvenido a PediloYa {user.displayName}</p>
            <p className="text">Utima conexion:{user.metadata.lastSignInTime}</p>
            <p className="text">email: {user.email}</p>
            <Link href="/">Volver</Link>
            <br/><br/><br/><br/><br/><br/>
           </div>
         <FooterGrid />
         </MainContextProvider>
            </>

        )
}

export default Dashboard;