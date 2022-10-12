import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <ToastContainer />
    <aside className="sounds">
      <audio id="sound-click" src="/sounds/card-click.ogg" preload="auto" />
      <audio id="sound-jobdone" src="/sounds/jobs-done.ogg" preload="auto" />
    </aside>
  </>
)

export default MyApp
