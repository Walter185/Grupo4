
// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from '../components/Cart/store';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
