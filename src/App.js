import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Loading from "./components/Preloader/Loading";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Pageone from "./components/Pageone/Pageone";

function App() {
  const [loading, setloading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 0);
  }, []);

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
    <Router>
      <>
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <Sidebar />
            <Navbar />
            {filteredData.map((post) => {
              return (
                <div>
                  <Pageone
                    id={post.id}
                    date={post.earth_date}
                    image={post.img_src}
                    rover={post.rover}
                    camera={post.camera}
                  />
                </div>
              );
            })}
          </>
        )}
      </>
    </Router>
  );
}

export default App;
