import React from "react";
import { Table } from "react-bootstrap";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const { _id, serviceName, price, customer, email, phone, message, status } =
    order;

  return (
    <tr>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-danger ms-1"
        >
          X
        </button>
      </td>
      <td>{customer}</td>
      <td>{phone}</td>
      <td>${price}</td>
      <td onClick={() => handleStatusUpdate(_id)} className="text-danger">
        {status ? status : "Pending"}
      </td>
    </tr>
  );
};

export default OrderRow;
