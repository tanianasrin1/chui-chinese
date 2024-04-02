import Home from "@/components/Home/Home";
import Layout from "@/components/Layout/Layout";
import MetaComponent from "@/components/MetaComponent/MetaComponent";
// import axios from "../utils/axioswithcms";


export default function index() {
  return (
    <>
      <MetaComponent />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}


// async function fetchAPI(url) {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     return null;
//   }
// }

// export async function getServerSideProps() {
  
//   const hero = await fetchAPI(`/api/pages/home`);
  
//   return { props: { hero, } };
// }
