import React, {useState, useEffect} from 'react';
import './App.css';


function Fetch(){

  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch ('https://api.sr.se/api/v2/channels?format=json&indent=true&pagination=false')
    .then (response => response.json())
    .then (setData)
    .catch (setError);
  }, []);
  console.log(data)

  
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

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



    return (
      <>
        <ul>
          {data.channels.map((channel) =><li><br></br><h2>{channel.name}</h2><img src={channel.image}></img><audio src={channel.liveaudio.url}></audio></li>)}
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
