import React from 'react'
import Itemcard from "./Itemcard";
import data from "./data";
import './App.css';
import Companylogo from './Companylogo';
const Dashboard = () => {
  return (
    <div>
      <Companylogo></Companylogo>
      <section className="py-1 ">
        <div className="container fs-8 text-center">
          <div className='row'>
            {data.productData.map((item, index) => {
              return (
                <div class="col-lg-3 col-sm-4">
                  <div className='card border border-dark shadow-lg my-3'>
                  <Itemcard
                      title={item.title}
                      img={item.img}
                      desc={item.desc}
                      price={item.price}
                      item={item}
                      key={index} />
                  </div>
                </div>

              )

            }
            )}
          </div></div>
      </section>
    </div>
  )
}

export default Dashboard;