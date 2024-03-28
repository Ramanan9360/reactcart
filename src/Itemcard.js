import React from "react";
import { useCart } from "react-use-cart";
 const Itemcard = (props) => {
   const { addItem } = useCart();
    return(
      <div >
        <div>
            <img  src={props.img} className="card-img-top img-fluid pt-3" style={{height:"180px",width:"150px"}} alt="..."></img>
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-title">Rs.{props.price}</h5>
                    
                    <p className="card-text">{props.desc}</p>
                    <button className="btn btn-success" 
                      onClick={() => addItem(props.item)}>Add To Cart</button>
                </div>
        </div>
      </div>
    )
 }
 
 export default Itemcard;