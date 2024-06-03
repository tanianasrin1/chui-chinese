import Blogs from "@/components/Blogs/Blogs";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Project | </title>
      </Head>

      <Layout>
        <Blogs />
      </Layout>
    </>
  );
};

export default index;

// export async function getServerSideProps() {

//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
//     const res2 = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/recent-blogs`
//     );

//     const res3 = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/social-links`
//     );
//     const site = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/site-settings`
//     );

//     const  {data}  = await res.json();

//     const recentBlog = await res2.json();
//     const socialIcon = await res3.json();
//     const siteSetting = await site.json();

//     return { props: { data, siteSetting, socialIcon, recentBlog } };
//   }
