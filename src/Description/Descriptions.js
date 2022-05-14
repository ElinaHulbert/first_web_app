import React from "react";
import Header from "../Header/Header";
import "./Descriptions.css";

export function Description({ data }) {
  return (
    <div>
      {/* <ul><li key={data.id}>{data.channels.map((channel) => console.log(channel))}</li></ul> */}
      <Tagline data={data} />
      {console.log("data in description", data)}
    </div>
  );
}

function Tagline({ data }) {
  let href = document.location.href.split("/");
  console.log(href);
  let result = href[href.length - 1];
  // console.log("result ", result);
  return data.channels.map((channel) => {
    // console.log(channel.id);
    // console.log("result length:", result.length, " result is:", result);
    if (result == channel.id) {
      return (
        <div key={channel.id} className="container">
          <h1 className="tag" style={{ color: `#${channel.color}` }}>
            {channel.name}
          </h1>
          <h3 className="channel_type" style={{ color: `#${channel.color}` }}>
            Channeltype: {channel.channeltype}
          </h3>
          <p className="tagline">Tagline: {channel.tagline}</p>
          <a className="site_link" href={channel.siteurl}>
            Site URL
          </a>
        </div>
      );
    }
    return null;
  });
}
