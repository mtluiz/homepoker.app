import { ToastContainer } from "react-toastify"
import "../styles/global.css";
import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <ToastContainer />
  </>
)

export default MyApp
