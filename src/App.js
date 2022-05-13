import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Description } from "./Description/Descriptions";
import { Extra } from "./Extra/extra";
import Header from "./Header/Header";

function Channel({ channel }) {
  return (
    <>
      <div className="container-02">
        <div className="glassmorphic-card">
          <div className="imgBox">
            <img className="images" src={channel.image} alt="alt"></img>
          </div>
          <div className="contentBox">
            <h2>{channel.name}</h2>
            <p>{channel.tagline}</p>
            <audio className="audio" controls={true} allow="autoplay">
              <source src={channel.liveaudio.url} type="audio/mpeg"></source>
            </audio>
            <Link className="links" to={`/channel/${channel.id}`}>
              Description: {channel.name}
            </Link>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

function Fetch({ data }) {
  console.log("data ", data);
  return (
    <>
      <Header></Header>
      <ul className="ul">
        {data.channels.map((channel) => (
          <li className="list" key={channel.id}>
            <Channel channel={channel} />
          </li>
        ))}
      </ul>
      <Link className="extralink" to="extra">
        Extra
      </Link>
    </>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch(
      "https://api.sr.se/api/v2/channels?format=json&indent=true&pagination=false"
    )
      .then((response) => response.json())
      .then(setData)
      .catch(setError);
  }
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Fetch data={data} />} />
        <Route path="/channel/:id" element={<Description data={data} />} />
        <Route path="/extra" element={<Extra />} />
      </Routes>
    </div>
  );
}

export default App;
