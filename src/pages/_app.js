
// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from '@/components/store.js';
import Navbar from '@/components/Navbar.js';
import FooterGrid from '@/components/Footer.js';
import "@/styles/globals.css";
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import traduccion_es from '../translations/es/traduccion.json';
import traduccion_en from '../translations/en/traduccion.json';

i18next.init( {
  interpolation: {escapeValue: false},
  lng: "es",
  resources:{
    es: {
      traduccion: traduccion_es,
    },
    en: {
      traduccion: traduccion_en,
    }
  }
});


export default function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <div className="wrapper">
        <Navbar /><br></br><br></br>
        <Component {...pageProps} />
        <FooterGrid />
      </div>
    </Provider>
    </I18nextProvider>
  );
}
