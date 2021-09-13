import React from "react";
import styled from "styled-components";
import { Card, AppProvider } from "@shopify/polaris";
import "./Skeleton.css";

const Item = styled.div`
  margin-left: 1vw;
  height: 460px;
  width: 580px;
  border: solid #9daaf2 3px;
  border-radius: 0.7rem;
  margin-top: 1.8rem;
  background: #1a2238;
  position: relative;

  @media screen and (max-width: 760px) {
    height: 480px;
    width: 380px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CardLogo = styled.div`
  width: 45px;
  height: 45px;
  margin-left: 30px;
  margin-top: 10px;
  border-radius: 50%;
  border: solid #fff 0.2px;
  background-color: #e2e2e2;
`;

const Cardh1 = styled.h1`
  margin-left: 10px;
  margin-top: 10px;
  font-size: 30px;
  color: #f7d679;
`;

const CardImage = styled.img`
  width: 510px;
  height: 250px;
  margin-left: 30px;
  margin-top: 15px;
  border: solid #fff 0.2px;
  border-radius: 0.4rem;

  @media screen and (max-width: 760px) {
    width: 320px;
    height: 260px;
  }
`;

const CardDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 250px;
  margin-bottom: -20px;
  margin-left: 30px;
  color: #9daaf2;
`;

const CardShareInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const LikeButton = styled.div``;

const ShareButton = styled.div`
  margin-left: 10px;
  margin-right: 350px;

  @media screen and (max-width: 760px) {
    margin-right: 158px;
  }
`;

const Date = styled.div`
  font-size: 20px;
`;

const Info = styled.div``;

const Title = styled.div`
  margin-top: 15px;
  display: flex;
  width: 450px;
  color: #ff6a3d;
  font-size: 18px;
  font-weight: bold;

  @media screen and (max-width: 760px) {
    width: 300px;
  }
`;

function Skeleton() {
  return (
    <>
      <AppProvider>
        <Card style={{ positon: "absolute" }}>
          <Item>
            <Header>
              <CardLogo />
              <Cardh1></Cardh1>
            </Header>
            <CardImage src={""} alt="" />
            <CardDescription>
              <CardShareInfo>
                <LikeButton></LikeButton>
                <ShareButton></ShareButton>
                <Date></Date>
              </CardShareInfo>
              <Info>
                <Title></Title>
              </Info>
            </CardDescription>
          </Item>
        </Card>
      </AppProvider>
    </>
  );
}

export default Skeleton;
