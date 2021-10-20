import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseContext from '../ContextApi/UseContex';

const PraivatRout = ({ children, ...rest }) => {
    let {user,isLoding} = UseContext();
    if(isLoding){
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
        {...rest}
        render={({location})=>user.email ?(children) :<Redirect
            to={{
                pathname: "/login",
              state: { from: location }
            }}
        ></Redirect>}
        ></Route>
    );
};

export default PraivatRout;