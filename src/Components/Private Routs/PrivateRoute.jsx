import { Navigate } from "react-router-dom";
import { AuthContex } from "../../Contex/AuthProvider";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
    const {user} = useContext(AuthContex);
    if(user){
        return children;
    }


    return <span><Navigate to={'/signin'}></Navigate> </span>;
};

export default PrivateRoute;