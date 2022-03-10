import React from "react";

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
  let href = document.location.href;
  let result = href.slice(30).toString();
  console.log("result ", result);
  return data.channels.map((channel) => {
    console.log(channel.id);
    console.log("result length:", result.length, " result is:", result);
    if (result == channel.id) {
      return (
        <div key={channel.id} style={{ backgroundColor: `#${channel.color}` }}>
          <h1>{channel.name}</h1>
          <h3>Channeltype: {channel.channeltype}</h3>
          <p>Tagline: {channel.tagline}</p>
          <a href={channel.siteurl}>Site URL</a>
        </div>
      );
    }
    return null;
  });
}
