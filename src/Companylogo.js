import React from 'react'
import img1 from './images/iphone.png';
import img2 from './images/poco.png';
import img3 from './images/realme.png';
import img4 from './images/google.png';
import img5 from './images/vivo.png';
import img6 from './images/samsung.png';
const Companylogo = () => {
  return (
    <div>
        <section>
    <div className="container-fluid pt-3">
    
      <div className="row"> 
        <div className="col-2 "> <img src={img1} className="img-fluid navimg w-75 h-75" alt='...'/> </div>
        <div className="col-2 "><img src={img2} className="img-fluid navimg w-75 h-75" alt='...'/> </div>
        <div className="col-2 "><img src={img3} className="img-fluid navimg w-75 h-75" alt='...'/> </div>
        <div className="col-2 "><img src={img4} className="img-fluid navimg w-75 h-75" alt='...'/> </div>
        <div className="col-2 "><img src={img5} className="img-fluid navimg w-75 h-75" alt='...'/></div>
        <div className="col-2 "><img src={img6} className="img-fluid navimg w-75 h-75" alt='...'/></div>
      </div>
     
    </div>
  </section>
    </div>
  )
}

export default Companylogo