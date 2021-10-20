import React from 'react';
import { Link } from 'react-router-dom';
import useFackdata from '../../Hoocks/useFackdata';
import servicimage from '../../image/logo/slide-1.webp';

const Allservice = () => {
    const {services}=useFackdata();
    return (
        <div className="container pb-5">
            <div className="row pt-0">
                <img src={servicimage} alt="" />
            </div>
        <div className="row">
        <h1 className="text-center">Our Dantal Services</h1>
        {
            services.map(service=><div key={service.id} className="col-sm-4 g-4">
            <div className="card">
                <div className="serviceimag">
                    <img className="w-100" src={service.img} alt="" />
                </div>
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.des}</p>
                <Link to={`/service/${service.id}`}>Details</Link>
              </div>
            </div>
            </div>)
        }
        <div className="text-end mt-5">
            <Link className="p-2 rounded bg-danger text-white mt-3" to="/home">Go Back</Link>
        </div>
    </div>
</div>
    );
};

export default Allservice;