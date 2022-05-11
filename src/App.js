import React, {useState, useEffect} from 'react';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import {Description} from "./descriptions";
import {Extra} from "./extra";



function Channel({channel}){
  return(
    <>
<div class="container-02">
		
		<div class="glassmorphic-card">
			<div class="imgBox">
        <img className="images" src={channel.image} alt="alt"></img>
			</div>
			<div class="contentBox">
        <h2>{channel.name}</h2>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ...</p>
        <audio className="audio" controls={true} allow="autoplay"><source src={channel.liveaudio.url}  type="audio/mpeg"></source></audio>s
			</div>
		</div>
		
</div>




    <br></br><br></br><br></br>
     
      
      
    </>
  )

}




function Fetch({data}){
  console.log("data ", data)
    return (
      <>
      <Link className="extralink" to="extra">Extra</Link>
        <ul className="ul">
          {data.channels.map((channel) =><li className="name" key={channel.id}><Channel 
           channel={channel}/><Link className="links" to={`/channel/${channel.id}`}>Description of the channel: {channel.name}</Link></li>)}
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
   fetch ('https://api.sr.se/api/v2/channels?format=json&indent=true&pagination=false')
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
