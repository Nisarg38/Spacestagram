import React from "react";
import styled from "styled-components";
import { Card, AppProvider } from "@shopify/polaris";

const Item = styled.div`
  margin-left: 1vw;
  height: 400px;
  width: 580px;
  border: solid #ea724b 3px;
  border-radius: 0.7rem;
  margin-top: 1.8rem;

  @media screen and (max-width: 930px) {
    height: 480px;
    width: 320px;
  }
`;

const CardDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 250px;
  margin-bottom: -20px;
  margin-left: 30px;
  color: #fff;
`;

const CardImage = styled.img`
  width: 240px;
  height: 170px;
  margin-left: 35px;
  margin-top: 35px;
  border: solid #fff 0.2px;
  border-radius: 1rem;
`;

function Verticalscroll() {
  return (
    <AppProvider>
      <Card>
        <Item>
          <CardImage src={""} alt="" />
          <CardDescription>
            <h1
              style={{
                fontSize: "20px",
                marginBottom: "-20px",
                padding: "0",
                fontWeight: "bold",
              }}
            >
              Crypto Market Tracker
            </h1>
            <br /> Libraries Used:
            <br />- Axios [For API]
            <br />- Framer Motion[Animation]
            <br />- Styled-Components[CSS]
          </CardDescription>
        </Item>
        <Item>
          <CardImage src={""} alt="" />
          <CardDescription>
            <h1
              style={{
                fontSize: "20px",
                marginBottom: "-20px",
                padding: "0",
                fontWeight: "bold",
              }}
            >
              Crypto Market Tracker
            </h1>
            <br /> Libraries Used:
            <br />- Axios [For API]
            <br />- Framer Motion[Animation]
            <br />- Styled-Components[CSS]
          </CardDescription>
        </Item>
        <Item>
          <CardImage src={""} alt="" />
          <CardDescription>
            <h1
              style={{
                fontSize: "20px",
                marginBottom: "-20px",
                padding: "0",
                fontWeight: "bold",
              }}
            >
              Crypto Market Tracker
            </h1>
            <br /> Libraries Used:
            <br />- Axios [For API]
            <br />- Framer Motion[Animation]
            <br />- Styled-Components[CSS]
          </CardDescription>
        </Item>
      </Card>
    </AppProvider>
  );
}

export default Verticalscroll;
