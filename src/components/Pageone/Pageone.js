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
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=C0AhMKBPXqpPU9pZrHZjgu5oTmINIkBrrdHwNL2T"
      )
      .then((res) => {
        setData(res.data.photos);
        console.log(res.data.photos);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredData = data.filter((post) => post.id);

  return (
    <Container id="home">
      <BgSvg />
      <Content>
        {filteredData.map((post) => {
          return (
            <Verticalscroll
              id={post.id}
              date={post.earth_date}
              image={post.img_src}
              rover={post.rover}
              camera={post.camera}
            />
          );
        })}
      </Content>
    </Container>
  );
};

export default Pageone;
