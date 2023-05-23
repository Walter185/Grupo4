
// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from '@/components/redux/store.js';
import Navbar from '@/components/Navbar/Navbar.js';
import FooterGrid from '@/components/Footer/Footer.js';
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Navbar /><br></br><br></br>
        <Component {...pageProps} />
        <FooterGrid />
      </div>
    </Provider>
  );
}
