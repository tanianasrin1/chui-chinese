import Contact from "@/components/Contact/Contact";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      {/* <Head>
        <title>Contact us - {siteSetting?.data?.name}</title>
        <link rel="icon" href={siteSetting?.data?.favicon} />
      </Head> */}
      <Layout siteSetting={siteSetting}>
        <Contact />
      </Layout>
    </>
  );
};

export default index;

// export async function getServerSideProps() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/pages/contact-us`
//   );

//   const site = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/site-settings`
//   );

//   const { data } = await res.json();

//   const siteSetting = await site.json();

//   return { props: { data, siteSetting } };
// }
