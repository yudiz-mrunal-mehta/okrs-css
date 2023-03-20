import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../component/navbar/index';
function MyApp({ Component, pageProps }) {
  return (
    <div className='container text-center'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
