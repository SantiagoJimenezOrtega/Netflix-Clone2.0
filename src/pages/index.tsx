import Image from "next/image";
import Head from "next/head";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import requests from "../../utils/requests";
import { Movie } from "../../typings";
import Row from "../../components/Row";
import React, { useEffect } from "react";
import {
  initArrowNavigation,
  getArrowNavigation,
} from "@arrow-navigation/core";

// Initialize the library

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

/** */

const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) => {
  useEffect(() => {
    initArrowNavigation({
      preventScroll: true,
    });
    const navigationApi = getArrowNavigation();
  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh] scrollbar-none">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="public\netflix.ico" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24" ah-col>
          {/* Register each row as a focusable group */}
          <Row
            title="Trending Now"
            movies={trendingNow}
            id="row-1"
            ref={(element) => {
              navigationApi.registerGroup("row-1");
            }}
          />

          <Row
            title="Top Rated"
            movies={topRated}
            id="row-2"
            ref={(element) => {
              navigationApi.registerGroup("row-2");
            }}
          />

          <Row
            title="Action Thrillers"
            movies={actionMovies}
            id="row-3"
            ref={(element) => {
              navigationApi.registerGroup("row-3");
            }}
          />

          {/* My List Component */}
          <Row
            title="Comedies"
            movies={comedyMovies}
            id="row-4"
            ref={(element) => {
              navigationApi.registerGroup("row-4");
            }}
          />

          <Row
            title="Scary Movies"
            movies={horrorMovies}
            id="row-5"
            ref={(element) => {
              navigationApi.registerGroup("row-5");
            }}
          />

          <Row
            title="Romance Movies"
            movies={romanceMovies}
            id="row-6"
            ref={(element) => {
              navigationApi.registerGroup("row-6");
            }}
          />

          <Row
            title="Documentaries"
            movies={documentaries}
            id="row-7"
            ref={(element) => {
              navigationApi.registerGroup("row-7");
            }}
          />
        </section>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
