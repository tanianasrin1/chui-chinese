import Home from "@/components/Home/Home";
import Layout from "@/components/Layout/Layout";
import MetaComponent from "@/components/MetaComponent/MetaComponent";

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
