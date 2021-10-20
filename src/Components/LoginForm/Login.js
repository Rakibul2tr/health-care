import React from 'react';
import { Form,Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import UseContext from '../../ContextApi/UseContex';
// import useFirebase from '../../Hoocks/UseFirebase';

const Login = () => {
    // const {googlesingin}=useFirebase();
    const {error,googlesingin,emailhendal,passwordhendal,LoginPassworsubmitHendel}=UseContext();
    const location= useLocation();
    const histry= useHistory();
    const googlehendel=()=>{
        googlesingin()
        .then(result=>{
            histry.push(location.state?.from || '/home')
        })
    };
    
    return (
        <div className="container mb-2">
            <div className="w-25 mx-auto bg-info p-4 mt-3 rounded">
            <Form onSubmit={LoginPassworsubmitHendel}>
                 <h2>Pleas Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onBlur={emailhendal} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onBlur={passwordhendal} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {
                 error?<div className="w-50 bg-white rounded">
                    <h4 className="p-2 text-danger">{error}</h4>
                    </div>:
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                 }
             </Form><br/>
             <Link to="/signup">Create a new Acount</Link>
             <br/>
             <br/>
             <button onClick={googlehendel} >
                 <span className="w-25">
                     <img className="googleicon" src="https://i.ibb.co/DK4JHtQ/google.png" alt="" />
                </span>Google Sing in</button>
            </div>
        </div>
    );
};

export default Login;