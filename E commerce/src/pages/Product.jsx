import React from "react";
import styled from "styled-components";
// import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
// import Menu from "../components/Menu/Menu";
import { Add, Remove } from "@material-ui/icons";
// import CustomNavbar from "../components/CustomNavbar";
import MainHeader from "../components/MainHeader";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  ${mobile({ marginTop: "100px" })};
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  padding-top: 150px;
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })};
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 20px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <MainHeader />
      {/* <div >
      <Announcement />
      <CustomNavbar />
      </div> */}
      {/* <Menu /> */}
      {/* <div className="desktop_navbar">
      </div>
      <div className="mobile_navbar">
      <MobileNavbar />
      </div> */}
      <Wrapper>
        <ImgContainer>
          <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Overcoat</Title>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            laudantium temporibus culpa. Ut ducimus odit amet quo temporibus
            quidem provident et, itaque id pariatur autem quam cumque voluptate
            nulla ex.
          </Description>
          <Price>$200</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Link to="/cart/" style={{ textDecoration: "none" }}>
              <Button>ADD TO CART</Button>
            </Link>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
