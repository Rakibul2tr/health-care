import React from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseContext from '../../ContextApi/UseContex';
// import useFirebase from '../../Hoocks/UseFirebase';

const Signup = () => {
    // const {googlesingin}=useFirebase();
    const {error,googlesingin,emailhendal,passwordhendal,createPassworsubmitHendel,errorhied}=UseContext();

    return (
        <div className="container mb-2">
        <div className="w-50 mx-auto bg-info p-4 mt-3">
            <Form onSubmit={createPassworsubmitHendel}>
                <h2>Pleas Registe or Sign Up</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onBlur={emailhendal} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onBlur={passwordhendal} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {
                 error?<div onClick={errorhied} className="w-50 bg-white rounded">
                     <button type="button" class="btn-close" aria-label="Close"></button>
                    <h4 className="p-2 text-danger">{error}</h4>
                    </div>:
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    }
                <input type="reset" value="Reset" className="btn btn-primary ms-2"></input>
            </Form><br/>
            <Link to="/login">Login to your site</Link>
            <br/>
            <br/>
         <button onClick={googlesingin}>
             <span className="w-25">
                     <img className="googleicon" src="https://i.ibb.co/DK4JHtQ/google.png" alt="" />
             </span>Google Sing up
        </button>
        </div>
    </div>
    );
};

export default Signup;