import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 -5px;
  :after {
    content: "";
    display: table;
    clear: both;
  }
`;
export const Column = styled.div`
  float: left;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 25%;
  padding: 0 10px;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
`;
export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
`;
export const H1 = styled.h1``;
export const H2 = styled.h2`
  width: 1200px;
  font-size: 3rem;
  text-align: center;
`;
export const P = styled.p``;
export const Img = styled.img`
  width: 100%;
`;
