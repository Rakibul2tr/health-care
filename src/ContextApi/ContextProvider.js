import React, { createContext } from 'react';
import useFirebase from '../Hoocks/UseFirebase';


export const Mycontext=createContext();

const ContextProvider = ({children}) => {

    const AllAuth = useFirebase();
    
    return (
        <Mycontext.Provider value={AllAuth}>
            {children}
        </Mycontext.Provider>
    );
};

export default ContextProvider;