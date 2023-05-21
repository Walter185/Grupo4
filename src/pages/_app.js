<<<<<<< HEAD
// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from '../components/Cart/store';
=======
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import store from './redux/store';

import "@/styles/globals.css";
>>>>>>> ffc273f3c6657a60eed9dc45d4abe553eda786b3

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
<<<<<<< HEAD
      <Component {...pageProps} />
=======
      <div className="wrapper">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
>>>>>>> ffc273f3c6657a60eed9dc45d4abe553eda786b3
    </Provider>
  );
}
