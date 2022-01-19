import React, {useState, useEffect} from 'react';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import {Description} from "./descriptions";
import {Extra} from "./extra";



function Channel({channel}){
  return(
    <>
    <br></br><br></br><br></br>
      <h2>{channel.name}</h2>
      <img src={channel.image} alt="alt"></img>
      <audio controls={true} allow="autoplay"><source src={channel.liveaudio.url}  type="audio/mpeg"></source></audio>
    </>
  )

}




function Fetch({data}){
  console.log("data ", data)
    return (
      <>
      <Link to="extra">Extra</Link>
        <ul>
          {data.channels.map((channel) =><li key={channel.id}><Channel 
           channel={channel}/><Link to={`/channel/${channel.id}`}>{channel.name}</Link></li>)}
        </ul>
      </>
  );


}





function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);


 function getData(){ 
   fetch ('http://api.sr.se/api/v2/channels?format=json&indent=true&pagination=false')
    .then (response => response.json())
    .then (setData)
    .catch (setError);
}
if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
if (!data) return null;
  
  return (
    
    <div className='App'>
      <Routes>
        <Route path="/" element={<Fetch data={data}/>}/>
        <Route path="/channel/:id" element={<Description data={data}/>}/>
        <Route path="/extra" element={<Extra/>}/>
      </Routes>
      
    </div>
  )
}



export default App;
