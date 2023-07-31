import React from "react";

const Team = () => {
  return (
    <div>
      <section id="services" class="team team-section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h1c className="display-3 text-white font-weight-bold">
              Meet our Team
            </h1c>
            <p className="lead text-white">
              We are a team of coders with a wide range of skills!
            </p>
          </div>

          <div class="row gy-4">
            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="icon-box iconbox-blue">
                <div class="icon">
                <svg
                    width="300"
                    height="300"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      stroke-width="0"
                      fill="#f5f5f5"
                      d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                    ></path>
                  </svg>
                  <div
                    className="hero-img"
                    data-aos="zoom-in"
                    data-aos-delay="150"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/team/cezmi-profile.jpeg"}
                      className="img-fluid animated rounded"
                      alt="Cezmi Aktepe"
                      width="200"
                    />
                  </div>
                </div>
                <h4>
                  <a href="">Cezmi Aktepe</a>
                </h4>
                <p>
                  Writing codes, designing web pages and creating projects was my dream job since I graduated from high school. I love dealing with computers and tech.<br /> <br />

                  I found a chance to reach my dream job in Canada.<br/>
                  Here I am ...
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="icon-box iconbox-orange ">
                <div class="icon">
                  <svg
                    width="300"
                    height="300"
                    viewBox="30 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      stroke-width="0"
                      fill="#f5f5f5"
                      d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                    ></path>
                  </svg>
                  <div
                    className="hero-img"
                    data-aos="zoom-in"
                    data-aos-delay="150"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/team/tim-profile.jpeg"}
                      className="img-fluid animated rounded"
                      alt="Tim Burns"
                      width="200"
                    />
                  </div>
                </div>
                <h4>
                  <a href="">Tim Burns</a>
                </h4>
                <p>
                  Hi, I'm Tim! I have previously worked in financial sales and switched my career path during the pandemic.<br /><br />

                  Now I am focusing on coding and managing great projects, from web apps and mobile apps to working on database optimization and management.<br /><br />

                  I am blending my love for code and project building with my experience in sales and managing people.
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="icon-box iconbox-pink">
                <div class="icon">
                  <svg
                    width="300"
                    height="300"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      stroke-width="0"
                      fill="#f5f5f5"
                      d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                      id="scale"
                      className="two grow"
                    ></path>
                  </svg>
                  <div
                    className="hero-img"
                    data-aos="zoom-in"
                    data-aos-delay="150"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/team/luiz-profile.jpeg"} 
                      className="img-fluid animated rounded"
                      alt="Luiz Claro"
                      width="200"
                    />
                  </div>
                </div>
                <h4>
                  <a href="">Luiz Claro</a>
                </h4>
                <p>
                  Hey, I'm Luiz! I'm an experienced Video Producer with 12 years of work in the film and TV industry.<br /><br />

                  My media and communication skills have led me to develop an interest in all things media.<br /><br />

                  So, I've decided to expand my skill set by becoming a Full Stack Developer for web and mobile apps so that I can offer complete multimedia solutions for my clients.
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="icon-box iconbox-yellow">
                <div class="icon">
                <svg
                    width="300"
                    height="300"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      stroke-width="0"
                      fill="#f5f5f5"
                      d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
                    ></path>
                  </svg>
                  <div
                    className="hero-img"
                    data-aos="zoom-in"
                    data-aos-delay="150"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/team/christine-profile.jpeg"}
                      className="img-fluid animated rounded"
                      alt="Christine Ebeo"
                      width="200"
                    />
                  </div>
                </div>
                <h4>
                  <a href="">Christine Ebeo</a>
                </h4>
                <p>
                  When I was a kid, I remember designing my friends' blogs for them. I knew then I wanted to go into tech.<br /><br />

                  I previously worked as an Operations Engineer, mainly focused on backend troubleshooting and providing individual solutions for our clients.<br /><br />

                  Tdoay, I have decided to build up my frontend knowledge so that I can also create and provide full stack solutions for people.
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="icon-box iconbox-red">
                <div class="icon">
                <svg
                    width="300"
                    height="300"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      stroke-width="0"
                      fill="#f5f5f5"
                      d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"
                    ></path>
                  </svg>
                  <div
                    className="hero-img"
                    data-aos="zoom-in"
                    data-aos-delay="150"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/team/alex-profile.jpeg"} 
                      className="img-fluid animated rounded"
                      alt="Alex Xu"
                      width="200"
                    />
                  </div>
                </div>
                <h4>
                  <a href="">Yunqian(Alex) Xu</a>
                </h4>
                <p>
                  Hey, I'm Alex! This is my first touch to this field.<br /><br />

                  I was attracted by the story of Harry Potter when I was young.<br /><br />

                  I imagine I am deploying magic while I am coding sometime. And I hope my kids may live in a magic world I coded in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
