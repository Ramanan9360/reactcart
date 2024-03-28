import React from "react";
import Itemcard from "./Itemcard";
import data from "./data";
 const Home = () => {
   
    return(
        <>
            <h1 className="text-center mt-3">All Items</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productData.map((item,index)=>{
                        return(
                            <Itemcard 
                            title={item.title} 
                            img={item.img} 
                            desc={item.desc} 
                            price={item.price}  
                            item={item} 
                            key={index}/>
                        )
                    })}
                    
                </div>
            </section>
        </>
    )
 }

 export default Home;