import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggin } from "../auth";

const BlankPage = () => {
    return isLoggin() ? <Outlet /> : <Navigate to='/login' />
};

export default BlankPage;
