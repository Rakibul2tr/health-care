import { Link } from 'react-router-dom';
import useFackdata from '../../Hoocks/useFackdata';

const Services = () => {
    const {services}=useFackdata();
    const HomeServicesData= services.slice(0,6);
    return (
        <div className="container py-5 border-bottom">
            <div className="row">
            <h1 className="text-center">Our Dantal Services</h1>
            {
                HomeServicesData.map(service=><div key={service.id} className="col-sm-4 g-4">
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
            <div className="text-end mt-5"><Link className="p-2 rounded bg-danger text-white mt-3" to="/service">See All Service</Link></div>
        </div>
    </div>
    );
};

export default Services;