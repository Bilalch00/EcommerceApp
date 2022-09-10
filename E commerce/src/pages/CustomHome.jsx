import React from "react";
// import { useState } from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader";
// import offer from "../assets/offer.jpeg";
// import newsale from "../assets/newsale.png";
import { mobile } from "../responsive";
// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { HomeInstaSlider } from "../data";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import '../main.css';
import MobileSlider from "../components/MobileSlider";
import CategoriesCard from "../components/CategoriesCard/CategoriesCard";
import MobileCardSlider from "../components/MobilecardSlider/MobileCardSlider";
import FavouriteStyle from "../components/FavouriteStyle/FavouriteStyle";
const Container = styled.div`
  margin-top: -100px;
  /* ${mobile({ marginTop: "0px" })}; */
`;
// const SaleImgContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const SaleMainContaienr = styled.div`
//   width: 70%;
//   height: 150vh;
//   ${mobile({ width: "95%", height: "60vh" })};
// `;
// const SaleImg = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: fill;
// `;
const InstaTitle = styled.h1`
  margin-top: 10px;
  letter-spacing: 4px;
  font-weight: 600;
  text-align: center;
`;

// const SliderContainer = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   position: relative;
//   overflow: hidden;
//   ${mobile({ marginTop: "-120px" })};
// `;
// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   margin: auto;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;
// const Wrapper = styled.div`
//   height: 100%;
//   display: flex;
//   transition: all 1.5s ease;
//   transform: translateX(${(props) => props.slideIndex * -100}vw);
// `;
// const Slide = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100vw;
//   height: 100vh;
//   background-color: #${(props) => props.bg};
// `;
// const ImageContainer = styled.div`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* flex: 1; */
// `;
// const Image = styled.img`
//   height: 100%;
//   width: 100%;
//   ${mobile({ height: "50%" })};
//   object-fit: cover;
// `;
const BestSellingContainer = styled.div`
  /* ${mobile({ marginTop: "-150px" })}; */
`;

const CustomHome = () => {
  // const [slideIndex, setSlideIndex] = useState(0);
  // const handleClick = (direction) => {
  //   if (direction === "left") {
  //     setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  //   } else {
  //     setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  //   }
  // };
  return (
    <>
      <MainHeader />
      <Container>
        {/* <SaleImgContainer>
          <SaleMainContaienr>
            <SaleImg src={offer} />
          </SaleMainContaienr>
        </SaleImgContainer> */}
        <div className="desktop-categories">
        <Categories />
        <CategoriesCard />
        </div>

        <div className="Mobile-categories">
        <MobileSlider />
        <MobileCardSlider />
        </div>
        <FavouriteStyle />
        {/* <SliderContainer>
          <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
          </Arrow>
          <Wrapper slideIndex={slideIndex}>
            {HomeInstaSlider.map((item) => {
              return (
                <Slide bg={item.bg} key={item.id}>
                  <ImageContainer>
                    <Image src={item.img} />
                  </ImageContainer>
                </Slide>
              );
            })}
          </Wrapper>
          <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
          </Arrow>
        </SliderContainer> */}
        <BestSellingContainer>
          <InstaTitle>BEST SELLING PRODUCTS</InstaTitle>
          <Products />
        </BestSellingContainer>
        <Footer />
      </Container>
    </>
  );
};

export default CustomHome;
