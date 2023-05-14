import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import WithHeaderAndQuoteExample from '@/components/Footer';
import { useRouter } from 'next/router';


const Div = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;

  .title {
    font-size: 64px;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    @media (max-width: 640px) {
      font-size: 56px;
    }
  }

  .text {
    margin-top: 30px;
  }

  a {
    display: block;
    margin-top: 40px;
    padding: 14px 42px;
    text-decoration: none;
    font-weight: 500;
    border: none;
    border-radius: 10px;
    background: #8e2de2;
    background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);
    background: linear-gradient(to right, #8e2de2, #4a00e0);
    color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;
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
            <>      
            <Div>
            <p className="title">Bienvenido a PediloYa {user.displayName}</p>
            <p className="text">Utima conexion:{user.metadata.lastSignInTime}</p>
            <p className="text">email: {user.email}</p>
            <Link href="/">Volver</Link>
            <br/><br/><br/><br/><br/><br/>
           </Div>
         <WithHeaderAndQuoteExample></WithHeaderAndQuoteExample>
            </>

        )
}

export default Dashboard;