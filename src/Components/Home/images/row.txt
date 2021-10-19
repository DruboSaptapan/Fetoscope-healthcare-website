import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading} = useAuth();
    if (isLoading) {
        return (
            <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.displayName ? children : <Redirect
                to={{
                    pathname: "/sign-in",
                    state: { from: location }
                }}
            ></Redirect>
            }
        >
        </Route>
    );
};

export default PrivateRoute;