import React from "react";
import Layout from "../../components/Layout";
import TopSection from "./TopSection/index";
import SecondSection from "./SecondSection/index";

function Home() {
  return (
    <Layout>
      <TopSection />
      <SecondSection />
    </Layout>
  );
}

export default Home;
