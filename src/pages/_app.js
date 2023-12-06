import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>

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
