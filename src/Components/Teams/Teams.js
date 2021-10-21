import React from 'react';
import { Link } from 'react-router-dom';
import useFackdata from '../../Hoocks/useFackdata';
import './Teams.css';

const Teams = () => {
    const {Teams}=useFackdata();
    return (
        <div className="container p-5">
            <div className="row">
            <h1 className="text-center text-success py-4">Doctors Teams</h1>
            </div>
            <div className="row">
                {
                    Teams.map(team=><div className="col-md-4 " key={team.id}>
                        <div  className="card position-relative mb-2 doctorcard">
                        <div className="teamImage">
                            <img className="" src={team.img} alt="" />
                        </div>
                        <div className="teamName">
                        <Link className="py-1 px-2 bg-secondary rounded text-white" to={`/teams/${team.id}`}>Appoinment</Link><br/>
                            <span>{team.name},</span>
                            <span>{team.spashilis}</span>
                        </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Teams;