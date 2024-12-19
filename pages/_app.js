import Preloader from "@/src/layouts/Preloader";
import "@/styles/globals.css";
import '../public/styles/bootstrap.css';
import '../public/styles/animate.css';
import '../public/styles/magnific-popup.css';
import '../public/styles/splitting.css';
import '../public/styles/swiper.css';
import '../public/style.css';
import { Fragment } from "react";
const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
