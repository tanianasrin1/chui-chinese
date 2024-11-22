import About from "@/components/About/About";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      {/* <Head>
        <title>About - {siteSetting?.data?.name}</title>
        <link rel="icon" href={siteSetting?.data?.favicon} />
      </Head> */}
      <Layout>
        <About />
      </Layout>
    </>
  );
};

export default index;

// export async function getServerSideProps() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/pages/about-us`
//   );
//   const res3 = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/social-links`
//   );
//   const site = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/site-settings`
//   );

//   const { data } = await res.json();
//   const socialIcon = await res3.json();

//   const siteSetting = await site.json();

//   return { props: { data, siteSetting, socialIcon } };
// }
