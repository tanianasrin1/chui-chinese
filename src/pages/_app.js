import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default function App({ Component, pageProps }) {
  // console.log = function () {};
  // console.warn = function () {};
  // console.error = function () {};

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})
  return (
    <>
      
        <Component {...pageProps} />
   

      <ToastContainer
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        draggable={true}
        position="top-right"
        toastClassName=""
        bodyClassName=""
        progressClassName=""
        pauseOnFocusLoss={true}
        newestOnTop={true}
        theme="colored"
      />
    </>
  );
}
