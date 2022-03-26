/*
Developer(s): Tim Burns

*/ 

import React from "react";
import {Link} from 'react-router-dom'

export const ServiceList = ({ title, notes, picture, uid }) => {
  const style = {
    minWidth: 100,
  };
  return (
    <div
      className="col-lg-4 col-md-6 d-flex align-items-stretch"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      <div className="icon-box iconbox-pink">
        <div className="icon">
          <img
            src={picture}
            className="img-fluid animated rounded"
            alt="be part of community"
          />
        </div>
        <h4>
          <Link to="" className="text-plain">{title}</Link>
        </h4>
        <hr />
        <p>{notes}</p>
      </div>
    </div>
  );
};

export default ServiceList;
