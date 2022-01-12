import React, {useState, useEffect} from 'react';
import './App.css';

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

function Audio({channel}){
  
const audio = new Audio("https://sverigesradio.se/topsy/direkt/srapi/5283.mp3");
audio.play()
console.log("audio", audio);
  return(
    <>
      {/* <audio src={channel.liveaudio.url}></audio> */}
    </>
  )
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
          {data.channels.map((channel) =><li><Channel channel={channel}/></li>)}
        </ul>
      </>
  );


}




function App() {
  return (
    <div className='App'>
      <Fetch/>
    </div>
  )
}



export default App;
