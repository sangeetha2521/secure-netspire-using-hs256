import React from 'react';
import Pdf from "react-to-pdf";
import DefaultProfile from "../images/logo.jpg.png";
import Signature from"../images/signature2.png";
const ref = React.createRef();

const PDF = (props) => {
  return (
    
    <>
      <div className="bill black-11" ref={ref}>
      <img
        style={{ height: "100px", width: "100px",display:"inline"}}
         src={DefaultProfile}  ></img>
         
         <p className="black-4">product Name:{props.title}</p>
   
         <p className="black-4">Product Price:{props.price}</p>
         <p className="black-4 ">Product Quantity:{props.quantity}</p>
         <p className="black-4 ">Product totalprice:{props.totalprice}</p>
        <h5 >Product image</h5>


       
        
<p className="font-bold mark bg-info ">
        <img src={props.image} alt={props.title} /> PAID ✔️😊</p>

        <h4>THANKS FOR SHOPPING💙
        </h4>
        <h4>KEEP SHOPPING❣
        </h4>
        
        
<img
        style={{ height: "100px", width: "100",
      alignItems:"inherit"}}
         src={Signature} >

         </img>

      </div>
      <Pdf targetRef={ref} filename="bill.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;