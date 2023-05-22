
// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './../components/redux/store';
import Navbar from './../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Navbar /><br></br><br></br>
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}
