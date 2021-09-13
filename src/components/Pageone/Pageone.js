import React from "react";
import styled from "styled-components";
import BgSvg from "./BgSvg";
import "./Pageone.css";
import Verticalscroll from "./Verticalscroll";

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
  align-items: center;
  justify-content: center;
`;

const Pageone = (props) => {
  const { id, date, img, rover, camera } = props;

  return (
    <Container id="home">
      <BgSvg />
      <Content>
        <Verticalscroll
          id={id}
          date={date}
          img={img}
          rover={rover}
          camera={camera}
        />
      </Content>
    </Container>
  );
};

export default Pageone;
