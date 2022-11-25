import React, { useEffect, useState } from "react";
import ServiceMenu from "./ServiceMenu";

const ServiceData = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container">
      <div className="row g-5">
        {services.map((service) => (
          <ServiceMenu key={service._id} service={service}></ServiceMenu>
        ))}
      </div>
    </div>
  );
};

export default ServiceData;
