import React, { useState, useEffect } from "react";

export function Extra() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch(
      "https://api.sr.se/api/v2/extra/broadcasts?format=json&indent=true&pagination=false"
    )
      .then((response) => response.json())
      .then(setData)
      .catch(setError);
  }
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;
  console.log(data);
  return (
    <>
      <p>Extra broadcasts</p>
      <Render data={data} />
    </>
  );
}

function Render({ data }) {
  console.log("data from render ", data);
  return (
    <>
      <ul>
        {data.broadcasts.map((broadcast) => (
          <li key={broadcast.id}>
            <Channel broadcast={broadcast} />
          </li>
        ))}
      </ul>
    </>
  );
}

function Channel({ broadcast }) {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <h2>{broadcast.name}</h2>
      <audio controls={true} allow="autoplay">
        <source src={broadcast.liveaudio.url} type="audio/rtmp"></source>
      </audio>
    </>
  );
}
