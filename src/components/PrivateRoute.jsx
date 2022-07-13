import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";


function PrivateRouter({children}){
    const {state}=useContext(AuthContext);
   

    if (!state.isAuth)
    {
        return<Navigate to="/login" />;
    }

    return (children)
}

export default PrivateRouter