/*
Developer(s): Tim Burns

*/
import React from "react";
import { useState } from "react";
import { v4 } from "uuid";
import ServiceList from "../Components/Services/ServiceList";

export const Services = () => {
  const [serviceList, setServiceList] = useState([
    {
      title: "Lease Products",
      notes: "Got some items laying around the house and looking to make some extra cash? We Got You Covered!",
      picture: `${process.env.PUBLIC_URL}/assets/img/lease.svg`,
      id: v4(),
    },
    {
      title: "Rent Items",
      notes: "Need something quick to complete your set up or wanna try out a new hobby? We Got You Covered!",
      picture: `${process.env.PUBLIC_URL}/assets/img/rent.svg`,
      id: v4(),
    },
    {
      title: "Our Community",
      notes: "Want to be part of a community that shares & discusses great new products? We Got You Covered! ",
      picture: `${process.env.PUBLIC_URL}/assets/img/hangout.svg`,
      id: v4(),
    },    
  ]);

  return (
    <section id="services" className="services section-bg"> 
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>We offer a wide ranges of services to our customers</p>
        </div>
        <div className="row gy-4 d-flex justify-content-center">
        
          {serviceList.map((s) => (
            <ServiceList
              title={s.title}
              notes={s.notes}
              picture={s.picture}
              key={s.id.toString()}
              uid={s.id.toString()}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
