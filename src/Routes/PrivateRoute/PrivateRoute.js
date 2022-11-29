import React, { useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../components/contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    
    if (loading) {
        return <h1>Loading...</h1>
    }

  if (user) {
    return children;
  }
    return (
      <div>
        <Navigate state={{ from: location }} replace></Navigate>
            <h1 className="text-center my-5">Please Login First</h1>
            <div className="text-center">
                <Link to='/login'>
                    <button className="btn btn-primary px-4">go to login</button>
                </Link>
            </div>
      </div>
    );
};

export default PrivateRoute;
