import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <ToastContainer />
  </>
)

export default MyApp
