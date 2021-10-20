import React from 'react';
import { Form,Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import UseContext from '../../ContextApi/UseContex';
// import useFirebase from '../../Hoocks/UseFirebase';

const Login = () => {
    // const {googlesingin}=useFirebase();
    const {error,googlesingin,emailhendal,passwordhendal,LoginPassworsubmitHendel,errorhied}=UseContext();
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
            <div className="row">
            <div className="col-md-6 offset-md-6 mx-auto bg-info p-4 mt-3 rounded">
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
                 error?<div onClick={errorhied} className="w-50 bg-white rounded">
                     <button type="button" class="btn-close" aria-label="Close"></button>
                    <p className="p-2 text-danger">{error}</p>
                    </div>:
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                 }
                 <input type="reset" value="Reset" className="btn btn-primary ms-2"></input>
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
        </div>
    );
};

export default Login;