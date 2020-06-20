import React,{useState, useReducer, useCallback} from 'react';
import styled from 'styled-components/macro';
import Stage from 'screens/auth/Stage';

import {history} from 'utils/navigation';

const AuthContext = React.createContext();

export const AuthProvider = AuthContext.Provider;


export const AuthConsumer = ({isAuthenticated, initialState}) =>{
    const [isAuth, setAuth] = useState(isAuthenticated);
    const [state, setState] = useState(initialState);

    const updateState = useCallback((update)=>{
        setState(update);
    },[state]);

    return (
        <AuthContext.Consumer>
            {children}
        </AuthContext.Consumer>
    )
    
} 


