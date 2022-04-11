/* 
Developer(s): Tim Burns

*/
import React from "react"; 
import DropzoneUploader from "../DropzoneUploader";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const ProfileList = ( props) => {
  const [image, setFile] = useState();
  return (
    <>
      <div className="row row-eq-height">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={props.image}
                  alt="Admin"
                  className="rounded-circle p-1 bg-primary"
                  width="110"
                />
                <div className="mt-3">
                  <h4>
                    {props.firstname} {props.lastname}
                  </h4>                  
                  <p className="text-muted font-size-sm">{props.address}</p>
                  {/* <button className="btn btn-primary">Upload Photo</button> */}
                  
                                {/* <div className="col-lg-12 form-group">
                                    <DropzoneUploader setFile={setFile} />
                                </div> */}
                            
                </div>
              </div>
              <hr className="my-4" />
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card">
            <div className="card-body ">
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">First Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input type="text" className="form-control" value={props.firstname} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Last Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input type="text" className="form-control" value={props.lastname} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input type="text" className="form-control" value={props.email} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input type="text" className="form-control" value={props.phone} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input type="text" className="form-control" value={props.address} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-9 text-secondary">
                  <input
                    type="button"
                    className="btn btn-primary px-4"
                    value="Save Changes"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="card">
          <div className="card-body">
            <h5 className="text-center">Available Products for Lease</h5>
            <div className="col-lg-2 d-inline p-2">
              <img
                src="assets/img/snowboard.png"
                className="img-fluid animated rounded"
                alt="Snowboard"
                width="100"
                height="100"
              />
            </div>
            <div className="col-lg-10 d-inline p-2">
              <p className="d-inline p-2">
                <b>Description:</b> Burton Snowboard for 1 week or longer
              </p>
              <p className="d-inline p-2">
                <b>Next Availability: </b> Next week
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row mt-4">
        <div className="card">
          <div className="card-body">
            <h5 className="text-center">Products Currently Renting</h5>
            <div className="col-lg-2 d-inline p-2">
              <img
                src="assets/img/snowboard.png"
                className="img-fluid animated rounded"
                alt="Snowboard"
                width="100"
                height="100"
              />
            </div>
            <div className="col-lg-10 d-inline p-2">
              <p className="d-inline p-2">
                <b>Description:</b> Burton Snowboard for 1 week or longer
              </p>
              <p className="d-inline p-2">
                <b>Due to return: </b> Next week
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileList;
