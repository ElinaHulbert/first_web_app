import React, {useState, useEffect} from 'react';
import './App.css';
import useSound from 'use-sound';
import watersound from "./watersound.mp3";
import {Howl, Howler} from "howler";
import {Routes, Route, Link} from "react-router-dom";
import {Description} from "./pages";

//   var playing = false;

//   function play() {
//     load();
//     play();
//     playing = true;
//   }

//   function pause() {
//    pause();
//     playing = false;
//   }

// function PlayOnClick(){
//   if(!playing) {
//     play();
// } else {
//     pause();
// }
// }

// const audio = new Audio("https://sverigesradio.se/topsy/direkt/srapi/5283.mp3");
// audio.play()
// console.log("audio", audio);



function Audio({channel}){
  // const ping = "https://sverigesradio.se/topsy/direkt/srapi/5283.mp3";
  // const [play] = useSound(watersound);
  const source = [channel.liveaudio.url];
  function playSound() {
    var stream = new Howl({
      src: [source],
      ext: ['mp3'],
      autoplay: true,
      html5: true
    });
  stream.play()
  }
  return source.map((sound) => {
    return(
      <>
        <button onClick={playSound()}>{channel.id}</button>
        {/* <audio src={channel.liveaudio.url}></audio> */}
      </>
  )})
  
  
}


function Channel({channel}){
  console.log("channelcomp", channel);
  return(
    <>
      <h2>{channel.name}</h2>
      <img src={channel.image} alt="alt"></img>
      <Audio channel={channel}/>
    </>
  )

}




function Fetch(){

  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);


 function getData(){ 
   fetch ('https://api.sr.se/api/v2/channels?format=json&indent=true&pagination=false')
    .then (response => response.json())
    .then (setData)
    .catch (setError);
}
  
  console.log(data)

  
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;


    return (
      <>
        
        <ul>
          {data.channels.map((channel) =><li key={channel.id}><Channel channel={channel}/><Link to={`/channel/${channel.id}`}>{channel.name}</Link></li>)}
        </ul>
      </>
  );


}




function App({channel}) {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Fetch />}/>
        <Route path="/channel/:id" element={<Description channel={channel}/>}/>
      </Routes>
      
    </div>
  )
}



export default App;
