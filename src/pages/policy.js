import Policy from "@/components/Policy/Policy";
import Layout from "@/components/Layout/Layout";
import React from "react";
import Head from "next/head";

const policy = () => {
  return (
    <>
      {/* <Head>
        <title>Privacy-Policy - {siteSetting?.data?.name}</title>
        <link rel="icon" href={siteSetting?.data?.favicon} />
      </Head> */}
      <Layout>
        <Policy />
      </Layout>
    </>
  );
};

export default policy;

// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pages/privacy-and-policy`);
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
