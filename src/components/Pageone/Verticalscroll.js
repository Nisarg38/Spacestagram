import React, { useState, useEffect } from "react";
import styled from "styled-components";
import nasa from "./nasa.jpg";
import axios from "axios";

const Item = styled.div`
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

const CardLogo = styled.img`
  width: 45px;
  height: 45px;
  margin-left: 30px;
  margin-top: 10px;
  border-radius: 50%;
  border: solid #fff 0.2px;
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
  background-image: url({img});
  @media screen and (max-width: 760px) {
    width: 320px;
    height: 260px;
  }
`;

const CardDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 600px;
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
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-right: 335px;

  @media screen and (max-width: 760px) {
    margin-right: 133px;
  }
`;

const LinkCopied = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  font-size: 16px;
`;

const Date = styled.h1`
  font-size: 22px;
  color: #9f55c3;
`;

const Info = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fd4770;
  display: flex;
  flex-direction: colums;
  @media screen and (max-width: 760px) {
    width: 350px;
  }
`;
const Status = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: colums;
  color: #9f55c3;
  align-items: center;
  @media screen and (max-width: 760px) {
    margin-top: 10px;
  }
`;

const Verticalscroll = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  const copy = async (e) => {
    await navigator.clipboard.writeText(e);
  };

  const [isLike, setLike] = useState("false");
  const [isShare, setShare] = useState("false");

  const handleLike = () => {
    setLike(!isLike);
  };

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

  console.log(data.img_src);
  const filteredData = data.filter((post, id) => post.id);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {filteredData.map((post) => {
        return (
          <Item style={{ positon: "absolute" }}>
            <Header>
              <CardLogo src={nasa} />
              <Cardh1>NASA</Cardh1>
            </Header>
            <a href={post.img_src} target="_blank" rel="noreferrer">
              <CardImage
                src={post.img_src}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG";
                }}
              />
            </a>
            <CardDescription>
              <CardShareInfo>
                <LikeButton>
                  <button
                    style={{
                      background: "#1a2238",
                      border: "0",
                      cursor: "pointer",
                    }}
                    onClick={handleLike}
                  >
                    {isLike ? (
                      <>
                        <svg
                          aria-label="Like"
                          class="_8-yf5 "
                          fill="#fff"
                          height="30"
                          role="img"
                          viewBox="0 0 48 48"
                          width="30"
                        >
                          <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg
                          aria-label="Unlike"
                          class="_8-yf5 "
                          fill="#ed4956"
                          height="30"
                          role="img"
                          viewBox="0 0 48 48"
                          width="30"
                        >
                          <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                        </svg>
                      </>
                    )}
                  </button>
                </LikeButton>
                <ShareButton>
                  <button
                    style={{
                      background: "#1a2238",
                      border: "0",
                      cursor: "pointer",
                    }}
                    let
                    onClick={() => {
                      navigator.clipboard.writeText(post.img_src);
                    }}
                  >
                    {isShare ? (
                      <>
                        <svg
                          aria-label="like"
                          class="_8-yf5 "
                          fill="#fff"
                          height="26"
                          role="img"
                          viewBox="0 0 48 48"
                          width="26"
                        >
                          <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                        </svg>
                      </>
                    ) : (
                      <div>
                        <svg
                          aria-label="like"
                          class="_8-yf5 "
                          fill=" #f7d679"
                          height="26"
                          role="img"
                          viewBox="0 0 48 48"
                          width="26"
                        >
                          <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                        </svg>
                      </div>
                    )}
                  </button>
                </ShareButton>
                <Date>{post.earth_date}</Date>
              </CardShareInfo>
              <Info>
                <h1 style={{ color: "#f7d679", fontSize: "18px" }}>
                  {post.rover.name} Rover
                </h1>
                : {post.camera.full_name} ({post.camera.name})
              </Info>
              <Status>
                <h1
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    marginRight: "5px",
                  }}
                >
                  Status:{" "}
                </h1>
                {post.rover.status}
                <h1
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    marginLeft: "15px",
                    marginRight: "5px",
                  }}
                >
                  Launch Date:
                </h1>
                {post.rover.launch_date}
              </Status>
            </CardDescription>
          </Item>
        );
      })}
    </div>
  );
};

export default Verticalscroll;
