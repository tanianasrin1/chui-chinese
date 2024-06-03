import BlogDetails from "@/components/BlogDetails/BlogDetails";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Index = ({ siteSetting, socialIcon, data, recentBlog }) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Head>
        <title>
          {slug} - {siteSetting?.data?.name}
        </title>
      </Head>
      <Layout siteSetting={siteSetting} socialIcon={socialIcon}>
        {/* <BlogDetails data={data} recentBlog={recentBlog} /> */}
        <BlogDetails data={data} recentBlog={recentBlog}/>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context) => {
    const { slug } = context.query;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`
      );

      const res2 = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/recent-blogs`
      );
      const { data } = await res.json();

      const site = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/site-settings`
      );

      const res3 = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/social-links`
      );

      const socialIcon = await res3.json();
      const recentBlog = await res2.json();
      const siteSetting = await site.json();
      return {
        props: {
          data,
          socialIcon,
          siteSetting,
          recentBlog,
        },
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        props: {
          data: null,
        },
      };
    }
  };
export default Index;
