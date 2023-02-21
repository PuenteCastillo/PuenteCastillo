import { useEffect } from "react";
import useSWR from "swr";
import Head from "next/head";

import { Inter } from "@next/font/google";

import HeroHeader from "@/modules/HeroHeader";
import Spacer from "@/modules/Spacer";
import Nav from "@/modules/Nav";
import Footer from "@/modules/Footer";
import Skittles from "@/modules/Skittles";

import Project_main from "@/modules/Project_main";

import Me from "@/modules/Me";
import GetInTouch from "@/modules/GetInTouch";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Puente </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <CDN /> */}
      </Head>
      <main className="main">
        <Nav />
        <div className="child">
          <div className="trigger"></div>
          <HeroHeader />
          {/* <About /> */}
          <Me />
          <Skittles />
          <Spacer />
          <Project_main />
          <GetInTouch />
        </div>
        <Footer />
      </main>
    </>
  );
}
