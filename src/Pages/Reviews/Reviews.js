import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../components/contexts/AuthProvider';

const Reviews = () => {

    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      fetch(`https://ultra-net-server.vercel.app/orders?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, [user?.email]);

    return (
        <div>
            <h1>Reviews page</h1>
        </div>
    );
};

export default Reviews;