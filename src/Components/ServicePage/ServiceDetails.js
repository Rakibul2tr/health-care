  import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useFackdata from '../../Hoocks/useFackdata';
  
  const ServiceDetails = () => {
    const {services}=useFackdata();
    // console.log(services);
      const {detailId}=useParams();
      const serviceDetal=services.find((element)=>element.id===Number(detailId));
      return (
          <div className="container py-3">
              <h1 className="text-center">{serviceDetal?.name} Details Information </h1>
              <div className="row py-5">
                <div className="col-md-6">
                    <img className="img-fluid" src={serviceDetal?.D_img} alt="" />
                </div>
                <div className="col-md-6">
                <div className="card">
                <div className="card-body">
                    <h1 className="card-title py-2">{serviceDetal?.name}</h1>
                    <h6 className="card-text">{serviceDetal?.des}</h6>
                    <Link to="/login" className="btn btn-primary mt-3 me-5">Online Booking</Link>
                    <Link to="/service" className="btn btn-primary mt-3">Go Back All Service</Link>
                </div>
                </div>
                </div>
              </div>
          </div>
      );
  };
  
  export default ServiceDetails;