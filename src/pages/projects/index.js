import Layout from "@/components/Layout/Layout";
import Project from "@/components/Project/Project";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
      <title>Project | </title>
      </Head>
     
      <Layout>
        <Project />
      </Layout>
    </>
  );
};

export default index;

// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pages/home`);
//   const res2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lessons`);
//   const res5 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/list/area`);
//   const res3 = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/social-links`
//   );
//   const res4 = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/coverage-areas`
//   );
//   const site = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/site-settings`
//   );
//   const google = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/google-reviews`
//   );

//   const { data } = await res.json();
//   const lesson = await res2.json();
//   const coverageArea = await res4.json();
//   const listArea = await res5.json();
//   const socialIcon = await res3.json();
//   const siteSetting = await site.json();
//   const googleReview = await google.json();

//   return { props: { data, siteSetting, socialIcon, lesson, coverageArea, listArea, googleReview } };
// }
