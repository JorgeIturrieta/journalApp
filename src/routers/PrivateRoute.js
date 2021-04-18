import React from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import PropTypes from "prop-types";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...args
}) => {
    
    //localStorage.setItem("lastPath", args.location.pathname);
  return (
      
    <Route
      {...args}
      component={(props) =>       
        isAuthenticated ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
