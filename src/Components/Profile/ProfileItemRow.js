import React from "react";
import { Link } from "react-router-dom";

export const ProfileItemRow = ({ id, image, title, description }) => {
  return (
    <>
      <Link to={process.env.PUBLIC_URL+ "/item/" + id}>
        <div className="col-lg-2 d-inline p-2">
          <img
            src={image}
            className="img-fluid animated rounded"
            alt="Item"
            width="100"
            height="100"
          />
        </div>
        <div className="col-lg-10 d-inline p-2">
          <div className="row d-inline">
            <h5 className="d-inline">{title}</h5>
            <br />
          </div>
          <div className="row d-inline">
            <p className="d-inline p-2">
              <b>Description:</b> {description}
            </p>
          </div>
        </div>
      </Link>
      <hr />
    </>
  );
};

export default ProfileItemRow;