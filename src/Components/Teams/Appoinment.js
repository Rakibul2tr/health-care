import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useFackdata from '../../Hoocks/useFackdata';

const Appoinment = () => {
    const {appoint} = useParams();
    const {Teams}=useFackdata();
    // console.log(appoint);
    const teamAppointment=Teams.find(team=>team.id===Number(appoint));
    console.log(teamAppointment);
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 offset-md-6 mx-auto ">
                    <img className="img-fluid" src={teamAppointment?.img} alt="" />
                </div>
            </div> 
            <div className="row">
                <div className="col-md-8 offset-md-4 mx-auto">
                    <div className=" text-center p-5">
                        <h2>{teamAppointment?.name}</h2>
                        <h5>{teamAppointment?.spashilis}</h5>
                        <h6>{teamAppointment?.des}</h6>
                        <h4>Contact : {teamAppointment?.number}</h4>
                        <Link to="/teams">
                        <button className="btn btn-success">Back to All Teams</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;