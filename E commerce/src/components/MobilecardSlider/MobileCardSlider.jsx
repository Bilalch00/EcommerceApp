import React from "react";
import "./MobileCardSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import {Link } from 'react-router-dom';
const MobileCardSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  `;
  const Background = styled.div`
    background-color: "#F5DBAB";
    background: "#F5DBAB";
    height: 100px;
    width: 100%;
    margin-top: -70px;
  `;
  const Image = styled.img`
    width: 200px;
    height: 300px;
    object-fit: contain;
  `;
  const PostContent = styled.div`
    text-align: center;
    margin-top: 10px;
  `;
  const CardContainer = styled.div`
    margin-left: 50px;
    margin-right: 50px;
    width: 100%;
  `;
  return (
    <>
    <Link to="/product/list/" className="no-underline">
      <Container>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition="all .10"
          transitionDuration={100}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px activecard"
          style={{ zIndex: "1" }}
          //   autoPlay={true}
        >
          <CardContainer>
            <a href="/" className="no-underline">
              <div className="image">
                <Image
                  src="https://www.orangebag.nl/cache/the-modern-shoe-list.680047/the-modern-shoe-list-500-700.jpg"
                  alt="1"
                  className="imageitself"
                />
              </div>
              <PostContent>
                <h3>The Modern Shoe List</h3>
                <h6 style={{ fontWeight: "50" }}>
                  they speak louder than words
                </h6>
              </PostContent>
            </a>
          </CardContainer>

          <CardContainer>
            <a href="/" className="no-underline">
              <div className="image">
                <Image
                  src="https://www.orangebag.nl/cache/obsessions.680022/obsessions-500-700.jpg"
                  alt="1"
                />
              </div>
              <PostContent>
                <h3>OBSESSIONS</h3>
                <h6 style={{ fontWeight: "50" }}>Hanneke</h6>
              </PostContent>
            </a>
          </CardContainer>

          <CardContainer>
            <a href="/" className="no-underline">
              <div className="image">
                <Image
                  src="https://www.orangebag.nl/cache/a-short-summer-story.679715/a-short-summer-story-500-700.jpg"
                  alt="1"
                />
              </div>
              <PostContent>
                <h3>A Short Summer Story</h3>
                <h6 style={{ fontWeight: "50" }}>summer soulmates</h6>
              </PostContent>
            </a>
          </CardContainer>
        </Carousel>
        <Background style={{ backgroundColor: "#F5DBAB" }}>
          {/* <div style={{backgroundColor:'#F5DBAB', width:'100px', height:'100px'}}></div> */}
        </Background>
      </Container>
      </Link>
    </>
  );
};

export default MobileCardSlider;
