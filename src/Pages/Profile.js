/*
Developer(s): Tim Burns

*/
import React from "react";
import ProfileList from "../Components/Profile/ProfileList";

export const Profile = () => {
  const [profileInfo, setProfileInfo] = [
    {
      fname: "Tim",
      lname: "Burns",
      title: "MERN Developer",
      address: "Toronto, Canada",
      phone: "416 435 7777",
      email: "timb@gamil.com",
      picture: "assets/img/team/tim-profile.jpeg"
    },
  ];

  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
      <h1 className="text-center mb-4">My Profile</h1>
        <div className="main-body">
          <div className="row">
            {/* <ProfileList/> */}

            <ProfileList
              fname={profileInfo.fname}
              lname={profileInfo.lname}
              title={profileInfo.title}
              address={profileInfo.address}
              phone={profileInfo.phone}
              email={profileInfo.email}
              picture={profileInfo.picture}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
