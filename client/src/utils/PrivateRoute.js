import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import {getStoredAuthToken} from './auth';

export const PrivateRoute = ({component:Component, ...rest}) => {
    
    return(
        <Route 
        {...rest}
        render={props => 
        getStoredAuthToken() ? (
            <Component {...props} />
        ) : (
            <Redirect 
                to={{
                    pathname:'/login',
                    state: {from: props.location }
                }}
            />
        )
        }
    
        />
    )
};
