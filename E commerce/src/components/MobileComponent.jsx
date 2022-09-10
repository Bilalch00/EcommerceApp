import {
  Favorite,
  KeyboardArrowLeft,
  Search,
  ShoppingBasket,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import "../main.css";

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  height: 40px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5dbab;
`;
const Center = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f5dbab;
`;
const LeftContainer = styled.div`
  flex: 1;
  background-color: #f5dbab;
`;
const CenterContainer = styled.div`
  background-color: #f5dbab;
  flex: 6;
`;
const RightContainer = styled.div`
  background-color: #f5dbab;
  flex: 1;
`;
const Input = styled.input`
  border: none;
  width: 80%;
  margin-left: 10px;
  background-color: #f5dbab;
  ::placeholder {
  color: black;
  font-style: bold;
  font-weight: 400;
  font-size: 16px;
  opacity: 1; /* Firefox */
}

  &:focus {
    outline: none;
  }
`;
const CancelButton = styled.button`
  border: none;
  background-color: #f5dbab;
  margin-left: 20px;
  font-weight: 600;
  cursor: pointer;
`;
const MobileComponent = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <Container>
        <Left>
          <Search
            style={{ fontSize: "30px" }}
            onClick={() => setShowSearch(!showSearch)}
          />
        </Left>
        <Center>
          <Favorite style={{ fontSize: "30px" }} />
        </Center>
        <Right>
          <ShoppingBasket style={{ fontSize: "30px" }} />
        </Right>
      </Container>
      <div
        className={
          showSearch ? "nav-search-mobile active" : "nav-search-mobile"
        }
      >
        <SearchMainContainer>
          <LeftContainer>
            <CancelButton onClick={() => setShowSearch(!showSearch)}>
              <KeyboardArrowLeft style={{fontSize:'24px'}} />
            </CancelButton>
          </LeftContainer>
          <CenterContainer>
            <Input placeholder="What are you looking for?..." />
          </CenterContainer>
          <RightContainer>
            <Search style={{ fontSize: '24px' }} />
          </RightContainer>
        </SearchMainContainer>
      </div>
    </>
  );
};

export default MobileComponent;
