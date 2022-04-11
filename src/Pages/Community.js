import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Nav, Link } from "react-router-dom";

export const Community = () => {
  const [postInfo, setPostList] = useState([]);

  useEffect(() => {
    //allows you to perform side effects in your components.
    // Some examples of side effects are: fetching data, directly updating the DOM
    sendApiRequest();
  }, []);

  const sendApiRequest = async () => {
    try {
      let token = localStorage.getItem("token"); // gets the token from local storage, stored when logged in
      let config = {
        // used to specify the data we want to put in the header and the content type
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      const response = await axios.get(
        // using axios get method to fetch the data using our api end point
        process.env.REACT_APP_API_URL + "/api/communityPost/all", // api end point that allows to get all todo (set in our back end)
        config // passing in the config arg which is a var declared above - to store token in header
        //
      );
      setPostList(response.data); // set the todo to the api response data
      console.log(response); // logging the entire response to se the structure
    } catch (err) {
      // catch any errors and log them to the console
      console.log(err);
    }
  };

  return (
    <section>
      <div className="container" data-aos="fade-up">
        <h1 className="text-center mb-4">Community Board</h1>
        {postInfo.map((post) => (
          <Posts post={post} key={post._id} />
        ))}
      </div>
    </section>
  );
};


const Posts = (props) => {
  // need a string to display boolean
  let url = `/communityRep/` + props.post._id;
  console.log(props.post._id);
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={props.post.picture}
                  className="img-responsive animated p-1 center-block d-block mx-auto d-inline"
                  // img-responsive center-block d-block mx-auto
                  alt=""
                  width="100"
                  height="100"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-10">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row d-inline">
                <h5 className="d-inline">
                  {props.post.title}
                  <span className="position-absolute px-3 end-0">
                    {props.post.category}
                  </span>
                </h5>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-6">
                  <b className="">{props.post.date}</b>
                </div>
                <div className="col-sm-6 text-secondary">
                  {props.post.content}
                </div>
                <div className="col-sm-10">Join the discussion</div>
                <div className="col-sm-2 text-center bottom-0 end-0">
                  <a
                    className="btn btn-primary mt-2 mb-2"
                    href="#"
                    role="button"
                  >
                    {/* <Link to="/communityReply/{props.post_id}" data={props.post_id} className="text-light">View Post</Link> */}
                    {/* <Link to={`/communityRep/${props.post._id}`}  className="text-light">View Post</Link> */}
                    <Link to={url} className="text-light">View Post</Link>
                    
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Community;
