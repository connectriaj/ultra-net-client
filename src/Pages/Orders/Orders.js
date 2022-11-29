import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/contexts/AuthProvider";
import Table from "react-bootstrap/Table";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://ultra-net-server.vercel.app/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`https://ultra-net-server.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`https://ultra-net-server.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        status: "Approved",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";

          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div className="container">
      <h1 className="text-center my-5 text-decoration-underline">
        Your Total Orders
      </h1>
      <h2 className="text-center">You have orders - {orders.length}</h2>

      <Table striped>
        <thead>
          <tr>
            <th>Delete</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderRow
              key={order._id}
              order={order}
              handleDelete={handleDelete}
              handleStatusUpdate={handleStatusUpdate}
              ></OrderRow>
              
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
