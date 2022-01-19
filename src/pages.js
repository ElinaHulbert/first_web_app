import React from "react";




export function Description({data}){
   
    return(
       
        <div>
        <ul>
            {data.channels.map((channel) => console.log(channel))}
                        
        </ul>
        <Tagline data={data}/>
        {console.log("data in description", data)}
        </div>
        
    )
}

function Tagline({data}){
    let href = document.location.href;
    let result = href.slice(30,).toString();
    console.log("data", data)
    return data.channels.map((channel)=>{
        console.log(channel.id)
        console.log("result length:", result.length, " result is:", result)
        if (result==channel.id){
                return(
                    <>
                    <h1>{channel.name}</h1>
                    <h3>Channeltype: {channel.channeltype}</h3>
                    <p>Tagline: {channel.tagline}</p>
                    <a href={channel.siteurl}>Site URL</a>

                    </>
                   
                )
        }
        return(null)
    })
     
}