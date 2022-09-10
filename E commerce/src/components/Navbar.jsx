import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import logo from '../assets/logo.png';
import Menu from "./Menu/Menu";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
`;
// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
// `;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
// const Logo = styled.h1`
//   font-weight: bold;
// `;
const Image = styled.img `
  width: 50px;
  height: 50px;
`
const Right = styled.div`
  flex: 1.2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Menu />
          {/* <Language>EN</Language> */}
        </Left>
        <Center>
          <Image src={logo} alt="" />
          {/* <Logo>Fabric Designer Outlet</Logo> */}
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          <SearchContainer>
            <Input />
            <Search style={{color: "gray", fontSize: 16}} />
          </SearchContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
