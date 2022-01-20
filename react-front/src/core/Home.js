import React from 'react';
import "../style.css";
import Posts from '../post/Posts';


const Home=()=>(
   
   <div>
    
  
   <div className="jumbotron  ">
     
   <h2 className="font-italic" align="center" height="90px" >
   NetSpire  📱 </h2>
  
<p className="lead" align="center"> Big things have small beginnings... Netspire's HQ began right here..!</p>

    </div>
    <div className="container">
   
    
    <div className="container">
        <Posts />
       


    </div>
    </div>  
    </div>
);
export default Home;