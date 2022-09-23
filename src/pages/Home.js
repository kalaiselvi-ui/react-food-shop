import React from "react";
import Banner from "../components/Home/Banner";
import Menu from "../components/common/Menu/Menu";
import Footer from "../components/common/Footer";
import CartCountButton from "../components/common/CartCountButton";
import { menuItemsData } from "../components/common/Menu/data";

const Home = () => {
  return (
    <>
      <Banner />
      <Menu list={menuItemsData} />
      <Footer />
      <CartCountButton />
    </>
  );
};

export default Home;
