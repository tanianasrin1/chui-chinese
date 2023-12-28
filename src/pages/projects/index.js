import Layout from "@/components/Layout/Layout";
import MetaComponent from "@/components/MetaComponent/MetaComponent";
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