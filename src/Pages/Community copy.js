import React from "react"; 

export const Community = () => {
  const [postInfo, setPostList] = [
    {
      username: "TimBurns1337",
      profile: "#",
      title: "Best Telescopes",
      category: "Technology",
      picture: "assets/img/team/tim-profile.jpeg",
      date: "Feb 20th 2022",
      numOfReplies: 13,
      replies: [
        {
          user: "user1",
          respsonse: "respsonse 1",
        },
        {
          user: "user2",
          respsonse: "respsonse 2",
        },
        {
          user: "user3",
          respsonse: "respsonse 3",
        },
      ],
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.      Praesent nec risus enim. Suspendisse potenti. Nam eu luctus      turpis. Maecenas eget laoreet ex. Nullam semper lacus quis      nulla ultrices imperdiet. Curabitur ligula erat, hendrerit a    neque vitae, rutrum pharetra velit. Duis et viverra leo.      Vestibulum a dui eget dolor consectetur feugiat. Ut auctor      gravida leo, ac porta turpis ultricies nec. Aliquam lorem      sapien, tempor et felis eu, vestibulum lobortis odio.       orci.",
    },
  ];
  return (
    <section>
      <div className="container" data-aos="fade-up">
        <h1 className="text-center mb-4">Community Board</h1>

        {/* Start of post */}
        <div className="row">
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={postInfo.picture}
                    className="img-responsive animated rounded-circle p-1 bg-success center-block d-block mx-auto d-inline"
                    // img-responsive center-block d-block mx-auto
                    alt="Snowboard"
                    width="75"
                    height="75"
                  />
                  <a className="btn btn-primary mt-2" href="#" role="button">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row d-inline">
                  <h5 className="d-inline">
                    {postInfo.title}
                    <span className="position-absolute px-3 end-0">
                      {postInfo.category}
                    </span>
                  </h5>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-4 text-center">
                    <h6 className="mt1">
                      {postInfo.username} / {postInfo.date}
                    </h6>
                    <a
                      className="btn btn-primary mt-2 mb-2"
                      href="#"
                      role="button"
                    >
                      View Post
                    </a>
                  </div>
                  <div className="col-sm-8 text-secondary">
                    {postInfo.content}
                  </div>
                </div>
                <hr />
                <form>
                  <div className="row">
                    <div className="col-sm-10">
                      <textarea
                        className="form-control"
                        id="textAreaExample1"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="col-sm-2">
                      <p>
                        <b>
                          Replies:{" "}
                          <span className="text-success">
                            {postInfo.numOfReplies}
                          </span>
                        </b>{" "}
                      </p>
                      <a
                        className="btn btn-primary mt-2"
                        href="#"
                        role="button"
                      >
                        Reply
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* end of post */}

        {/* Start of post */}
        <div className="row">
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={postInfo.picture}
                    className="img-responsive animated rounded-circle p-1 bg-success center-block d-block mx-auto d-inline"
                    // img-responsive center-block d-block mx-auto
                    alt="Snowboard"
                    width="75"
                    height="75"
                  />
                  <a className="btn btn-primary mt-2" href="#" role="button">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row d-inline">
                  <h5 className="d-inline">
                    {postInfo.title}
                    <span className="position-absolute px-3 end-0">
                      {postInfo.category}
                    </span>
                  </h5>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-4 text-center">
                    <h6 className="mt1">
                      {postInfo.username} / {postInfo.date}
                    </h6>
                    <a
                      className="btn btn-primary mt-2 mb-2"
                      href="#"
                      role="button"
                    >
                      View Post
                    </a>
                  </div>
                  <div className="col-sm-8 text-secondary">
                    {postInfo.content}
                  </div>
                </div>
                <hr />
                <form>
                  <div className="row">
                    <div className="col-sm-10">
                      <textarea
                        className="form-control"
                        id="textAreaExample1"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="col-sm-2">
                      <p>
                        <b>
                          Replies:{" "}
                          <span className="text-success">
                            {postInfo.numOfReplies}
                          </span>
                        </b>{" "}
                      </p>
                      <a
                        className="btn btn-primary mt-2"
                        href="#"
                        role="button"
                      >
                        Reply
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* end of post */}

        {/* Start of post */}
        <div className="row">
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={postInfo.picture}
                    className="img-responsive animated rounded-circle p-1 bg-success center-block d-block mx-auto d-inline"
                    // img-responsive center-block d-block mx-auto
                    alt="Snowboard"
                    width="75"
                    height="75"
                  />
                  <a className="btn btn-primary mt-2" href="#" role="button">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row d-inline">
                  <h5 className="d-inline">
                    {postInfo.title}
                    <span className="position-absolute px-3 end-0">
                      {postInfo.category}
                    </span>
                  </h5>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-4 text-center">
                    <h6 className="mt1">
                      {postInfo.username} / {postInfo.date}
                    </h6>
                    <a
                      className="btn btn-primary mt-2 mb-2"
                      href="#"
                      role="button"
                    >
                      View Post
                    </a>
                  </div>
                  <div className="col-sm-8 text-secondary">
                    {postInfo.content}
                  </div>
                </div>
                <hr />
                <form>
                  <div className="row">
                    <div className="col-sm-10">
                      <textarea
                        className="form-control "
                        id="textAreaExample1"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="col-sm-2">
                      <p>
                        <b>
                          Replies:
                          <span className="text-success">
                            {postInfo.numOfReplies}
                          </span>
                        </b>
                      </p>
                      <a
                        className="btn btn-primary mt-2"
                        href="#"
                        role="button"
                      >
                        Reply
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>        
        {/* end of post */}
      </div>
    </section>
  );
};

export default Community;
