import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./FavouriteStyle.css";

const Container = styled.div`
  margin-top: 30px;
  /* display: flex; */
`;
const HeadingContainer = styled.div``;
const CardContainer = styled.div`
  height: 250px;
  width: 180px;
  padding-left: 10px;
`;
const Image = styled.img`
  height: 230px;
  width: 180px;
`;
const Title = styled.h6`
  margin-top: 5px;
`;
const FavouriteStyle = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Container>
      <HeadingContainer>
        <h1>OUR STYLISTS' FAVOURITES</h1>
      </HeadingContainer>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px activecardprod"
        style={{ zIndex: "1" }}
        autoPlay={true}
      >
        <CardContainer>
          <Image
            src="https://www.orangebag.nl/cache/absolut-cashmere-spencers.675282/absolut-cashmere-spencers-333-444.jpg"
            alt="1"
          />
          <Title>Absolut Cashmere</Title>
        </CardContainer>

        <CardContainer>
          <Image
            src="https://www.orangebag.nl/cache/by-malene-birger-broeken.676812/by-malene-birger-broeken-333-444.jpg"
            alt=""
          />
          <Title>By Malene Birger</Title>
        </CardContainer>
        <CardContainer>
          <Image
            src="https://www.orangebag.nl/cache/seafolly-tassen-shoppers.672192/seafolly-tassen-shoppers-333-444.jpg"
            alt=""
          />
          <Title>Seafolly</Title>
        </CardContainer>
        <CardContainer>
          <Image
            src="https://www.orangebag.nl/cache/alchemist-tops-lange-mouwen.680062/alchemist-tops-lange-mouwen-333-444.jpg"
            alt=""
          />
          <Title>Alchemist</Title>
        </CardContainer>
        <CardContainer>
          <Image
            src="https://www.orangebag.nl/cache/ganni-jurken-lange-mouwen.681181/ganni-jurken-lange-mouwen-333-444.jpg"
            alt=""
          />
          <Title>Ganni</Title>
        </CardContainer>
        <CardContainer>
          <Image
            src="https://www.orangebag.nl/cache/modstrom-broeken.680548/modstrom-broeken-333-444.jpg
"
            alt=""
          />
          <Title>Modstrom</Title>
        </CardContainer>
        <CardContainer>
          <Image
            src="https://www.orangebag.nl/cache/absolut-cashmere-spencers.675282/absolut-cashmere-spencers-333-444.jpg"
            alt="1"
          />
          <Title>Absolut Cashmere</Title>
        </CardContainer>

        <CardContainer>
          <Image
            src="https://www.orangebag.nl/cache/by-malene-birger-broeken.676812/by-malene-birger-broeken-333-444.jpg"
            alt=""
          />
          <Title>By Malene Birger</Title>
        </CardContainer>
        <CardContainer>
          <Image
            src="https://www.orangebag.nl/cache/seafolly-tassen-shoppers.672192/seafolly-tassen-shoppers-333-444.jpg"
            alt=""
          />
          <Title>Seafolly</Title>
        </CardContainer>
        <CardContainer>
          <Image
            src="https://www.orangebag.nl/cache/alchemist-tops-lange-mouwen.680062/alchemist-tops-lange-mouwen-333-444.jpg"
            alt=""
          />
          <Title>Alchemist</Title>
        </CardContainer>
        <CardContainer>
          <Image
            src="https://www.orangebag.nl/cache/ganni-jurken-lange-mouwen.681181/ganni-jurken-lange-mouwen-333-444.jpg"
            alt=""
          />
          <Title>Ganni</Title>
        </CardContainer>
        <CardContainer>
          <Image
            src="https://www.orangebag.nl/cache/modstrom-broeken.680548/modstrom-broeken-333-444.jpg
"
            alt=""
          />
          <Title>Modstrom</Title>
        </CardContainer>
      </Carousel>
    </Container>
  );
};

export default FavouriteStyle;
