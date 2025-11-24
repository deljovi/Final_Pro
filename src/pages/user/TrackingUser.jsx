import React from "react";
import Navbar from "../../components/navbar/Navbar";

const TrackingUser = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold p-4">Track Your Order</h1>
      <p>See the status of your order here.</p>
    </div>
  );
};

export default TrackingUser;
