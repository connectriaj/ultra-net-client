import React, { useContext } from 'react';
import { AuthContext } from '../../components/contexts/AuthProvider';

const Orders = () => {
    const { user } = useContext(AuthContext)
    
    

    return (
        <div>
            <h1 className='text-center my-5 text-decoration-underline'>Your Total Orders</h1>
        </div>
    );
};

export default Orders;