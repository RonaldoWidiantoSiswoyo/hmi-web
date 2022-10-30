import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyHome from "../components/Home";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Your Place to Grow | HMI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/hm.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        ></link>
      </Head>
      <Header />
      <MyHome />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
