import React from "react";
import {Link} from "react-router-dom";


// export function Home(){
//     return(
//         <div>
//             <p>Home</p>
//             <nav>
//                 <Link to="description">Description</Link>
//             </nav>
//         </div>
//     )
// }


export function Description(props){
    console.log(props.channel.name)
    return(
        
        <div>
            <p>{props.channel.name}</p>
        </div>
    )
}