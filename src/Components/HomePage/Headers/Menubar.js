import React from 'react';
import logo from '../../../image/services/tooth.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import useFirebase from '../../../Hoocks/UseFirebase';
import UseContext from '../../../ContextApi/UseContex';


const Menubar = () => {
    // const {user,LogOut}=useFirebase();
    const {user,LogOut}=UseContext();
   
    return (
     <div className="headerbg border-bottom border-success">
        <div className="container">
            <Navbar collapseOnSelect expand="lg" bg="" variant="secondary">
                <Container>
                <Navbar.Brand href="#home" className="logo d-flex justify-content-start">
                    <img className="w-25" src={logo} alt="" />
                    <span className="fs-3 fw-6 text-danger lh-2 m-2 fs-1 fw-bolder">Dantal Care</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto text-dark">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/service">Service</Link>
                        <Link to="/teams">Teams</Link> 
                        <Link to="/signup">Sign up</Link>
                        {
                            user.displayName?<div>
                                <Link to="/login" onClick={LogOut}>Log Out</Link>
                               <span className="logedSpan">{user?.displayName}</span>
                                <img width="30px" className="rounded-circle" src={user?.photoURL} alt="" />
                            </div>
                            :<>
                            <Link to="/login" onClick={LogOut}>Login</Link>
                               <span className="logedSpan">{user?.email}</span>
                            </>

                        } 
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
      </div>
    );
};

export default Menubar;