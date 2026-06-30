import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/next";

const MainPage = dynamic(() => import("../src/app/components/MainPage"), { ssr: false });

const Home = () => {
  return (
    <>
      <Analytics />
      <Head>
        <title>Xim Vyge Narciso | Backend Software Engineer</title>
        <meta
          name="description"
          content="Backend Software Engineer specializing in distributed systems, event-driven architecture, Java, Spring Boot, AWS, and performance engineering."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Xim Vyge Narciso | Backend Software Engineer" />
        <meta
          property="og:description"
          content="Designing scalable backend systems for enterprise platforms serving 50M+ registered users."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/images/java.png" />
      </Head>
      <MainPage />
    </>
  );
};

export default Home;
