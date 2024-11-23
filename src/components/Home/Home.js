import React from "react";
import HomeHero from "./HomeHero";
import Categories from "./Categories";
import Location from "./Location";
import Visite from "./Visite";
import CustmerReview from "./CustmerReview";


const Home = () => {
  return (
    <>
    <HomeHero/>
    <Categories/>
    <Visite/>
    <CustmerReview/>
    <Location/>
    </>
  );
};

export default Home;
