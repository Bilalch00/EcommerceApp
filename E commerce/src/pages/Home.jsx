import React from "react";
// import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
// import Menu from "../components/Menu/Menu";
// import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
const Home = () => {
  return (
    <div>
      <MainHeader/>
      {/* <Announcement /> */}
      {/* <Navbar /> */}
      {/* <Menu /> */}
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
