import { Provider } from 'react-redux';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import store from './redux/store';

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}
