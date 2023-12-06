import React from "react";
import { redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: React.Component, ...rest }) => {
    return <Route {...rest} render={(props) => } />
}