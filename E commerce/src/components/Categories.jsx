import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection: "column"})};
`;
const Categories = () => {
  return <>
  <div style={{marginTop: '100px'}}>
    <h1 style={{textAlign: 'center'}}>Categories</h1> <br/>
  <Container>
    {categories.map(item => (
        <CategoryItem item={item} key={item.id}/>
    ))}
  </Container>
  </div>
  </>
  ;
};

export default Categories;
