import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BgSvg from "./BgSvg";
import "./Pageone.css";
import Verticalscroll from "./Verticalscroll";
import axios from "axios";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  z-index: 1;
  background: #1a2238;
  overflow: hidden;
`;

const Content = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Pageone = () => {
  return (
    <Container id="home">
      <BgSvg />
      <Content>
        <Verticalscroll />
      </Content>
    </Container>
  );
};

export default Pageone;
