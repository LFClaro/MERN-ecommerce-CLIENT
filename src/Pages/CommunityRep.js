import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const CommunityRep = (props) => {
  const{id} = useParams();
  console.log(id);
let postid = id; // hard coding cause cant get id atm



  // get the post count or replies
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
        process.env.REACT_APP_API_URL +
          "/api/communityReply/compost/" + postid, //  hard coding post id cant get post id its sending null for some reason
        config // passing in the config arg which is a var declared above - to store token in header
        //
      );
      setPostList(response.data); // set the todo to the api response data
      // console.log(response); // logging the entire response to se the structure
    } catch (err) {
      // catch any errors and log them to the console
      console.log(err);
    }
  };

  // get the post info
  const [postInfo2, setPostList2] = useState([]);

  useEffect(() => {
    //allows you to perform side effects in your components.
    // Some examples of side effects are: fetching data, directly updating the DOM
    sendApiRequest2();
  }, []);

  const sendApiRequest2 = async () => {
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
        process.env.REACT_APP_API_URL + "/api/communityPost/" + postid, // hard coded the postid
        config // passing in the config arg which is a var declared above - to store token in header
        //
      );
      setPostList2(response.data); // set the todo to the api response data
      // console.log(response); // logging the entire response to se the structure
    } catch (err) {
      // catch any errors and log them to the console
      console.log(err);
    }
  };


// get the form data
  const [formData, setFormData] = useState({
    reply: "",    
  });
  // break down form data into fields
  const { reply } = formData;

  const [replyError, setReplyError] = useState("");
  const setReplyErr = (String) => {
    setReplyError(String);
    console.log(replyError);
  };
 

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
let formIsValid = true;
  const handleValidation = async (e) => {
    //Reply   
    if (reply.trim() === "" || reply == null) {
      formIsValid = false;
      setReplyErr("reply can not be empty");  
      console.log("issues with reply - empty")      
    }
        
    return formIsValid;
    
  };
 

  const onSubmit = async (e) => {
    e.preventDefault();
    let tester = handleValidation();   

    if (formIsValid == true) {
      let token = localStorage.getItem("token");
      let config = {
        headers: {
          "Content-Type": "application/json",
          'x-auth-token': token, // not using token atm as i need to tie into alex login          
        },
      };

      let data = {
        reply,
        postid,
      };
      try {
        const response = await axios.post(
          process.env.REACT_APP_API_URL + "/api/communityReply",
          data,
          config
        );

        console.log("reply sent");
        // alert("Your message has been received, please check your email");
        window.location.reload();
      } catch (e) {
        console.log(e.response.data.errors);
      }
    } 
    else {
      alert("Your contact form has errors.");      
      // console.log(formIsValid);
    }
  };
  // console.log("postInfo2");
  // console.log(postInfo2);
  return (
    <section>
      <div className="container" data-aos="fade-up">
        <h1 className="text-center mb-4">Community Board</h1>        
        <br></br>
        <div className="row">        
        <div className="col-lg-12">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row d-inline">
                <h5 className="d-inline">
                  {postInfo2.title}
                  <span className="position-absolute px-3 end-0">
                    {postInfo2.category}
                  </span>
                </h5>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-6">
                  <b className="">
                    {postInfo2.date}
                  </b>
                </div>
                <div className="col-sm-6 text-secondary">
                  {postInfo2.content}
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="row card">
          <div className="col-md-12">
            <div className=" mb-3">
              <div className="card-body">
              
                {postInfo.map((post) => (
                  <Posts post={post} key={post._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row card col-md-12">
          <div className="card-body">
            <form onSubmit={(e) => onSubmit(e)}>
              <textarea
                type="text"
                className="form-control"
                name="reply"
                id="reply"
                rows={5}
                value={reply}
                placeholder="Your reply"
                onChange={(e) => onChange(e)}
                required
              ></textarea>
              <span style={{ color: "red" }}>{replyError}</span>
              <br />
              <div className="text-end">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Posts = (props) => {
  // need a string to display boolean
  return (
    <>
      {props.post.reply}
      <hr />
    </>
  );
};

export default CommunityRep;
