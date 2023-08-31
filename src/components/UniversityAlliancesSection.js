import React from 'react';
import Slider from 'react-slick';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const UniversityAlliancesSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rows: 2, 
    slidesToShow: 3,

    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
  };

  return (
    <section className="courses_secton bg-white academi-section">
      <div className="container-fluid">
        <div className="text_holder text-center mb-4">
          <h3 className="mb-2">Our University Alliances</h3>
          <p>We have created alliances with the top academic institutions in Pakistan</p>
        </div>

        <div className="slick-slider">
          <Slider {...settings}>
            {/* University 1 */}
            <div className="px-2">
              <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
                <div className="companies-1">
                  <div className="companies-holder">
                    <img  style={{width:'185px',height:"100px", border: '1px solid ',}}
                      src="https://assets.dukan.pk/pi/43/ks_img_1681898141_12516096628143.png"
                      loading="lazy"
                      alt="logo"
                      className=""
                    />
                  </div>
                  <p>Khwaja Fareed University of Engineering & Information Technology (KFUEIT)</p>
                </div>
              </a>
            </div>

            {/* University 2 */}
            <div className="px-2"style={{ width: '18px',
  height: '36px'}}>
              <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
                <div className="companies-1">
                  <div className="companies-holder">
                    <img  style={{width:'185px',height:"100px", border: '1px solid ',}}
                      src="https://assets.dukan.pk/pi/74/ks_img_1687851248_39351889575674.jpg"
                      loading="lazy"
                      alt="logo"
                      className=""
                    />
                  </div>
                  <p>University of Management and Technology – UMT</p>
                </div>
              </a>
            </div>

            {/* University 3 */}
            <div className="px-2">
              <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
                <div className="companies-1">
                  <div className="companies-holder">
                    <img  style={{width:'185px',height:"100px", border: '1px solid ',}}
                      src="https://assets.dukan.pk/pi/02/ks_img_1682518484_27287539575302.png"
                      loading="lazy"
                      alt="logo"
                      className=""
                    />
                  </div>
                  <p>Lahore College for Women University</p>
                </div>
              </a>
            </div>




            <div className="px-2" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
      <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
        <div className="companies-1">
          <div className="companies-holder">
            <img  style={{width:'185px',height:"100px", border: '1px solid ',}}
              src="https://assets.dukan.pk/pi/51/ks_img_1681898174_57009906628251.png"
              loading="lazy"
              alt="logo"
              className=""
            />
          </div>
          <p>The University of Lahore</p>
        </div>
      </a>
    </div>

    <div className="px-2" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
      <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
        <div className="companies-1">
          <div className="companies-holder">
            <img  style={{width:'185px',height:"100px", border: '1px solid ',}}
              src="https://assets.dukan.pk/pi/96/ks_img_1681898205_72569256628996.png"
              loading="lazy"
              alt="logo"
              className=""
            />
          </div>
          <p>The islamia University of bahwalpur</p>
        </div>
      </a>
    </div>

    <div className="px-2" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
      <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
        <div className="companies-1">
          <div className="companies-holder">
            <img  style={{width:'185px',height:"100px", border: '1px solid ',}}
              src="https://assets.dukan.pk/pi/91/ks_img_1681898289_34864666628491.png"
              loading="lazy"
              alt="logo"
              className=""
            />
          </div>
          <p>university of education lahore</p>
        </div>
      </a>
    </div>
    
    <div className="px-2" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
      <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
        <div className="companies-1">
          <div className="companies-holder">
            <img style={{width:'185px',height:"100px", border: '1px solid ',}}
              src="https://assets.dukan.pk/pi/35/ks_img_1681898267_66990926628235.png"
              loading="lazy"
              alt="logo"
              className=""
            />
          </div>
          <p>university of  Engineering and Technology, lahore</p>
        </div>
      </a>
    </div>
    
    <div className="px-2" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
      <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
        <div className="companies-1">
          <div className="companies-holder">
            <img  style={{width:'185px',height:"100px", border: '1px solid ',}}
              src="https://assets.dukan.pk/pi/74/ks_img_1687851248_39351889575674.jpg"
              loading="lazy"
              alt="logo"
              className=""
            />
          </div>
          <p>University of Management and Technology – UMT</p>
        </div>
      </a>
    </div>
    
    <div className="px-2" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
      <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
        <div className="companies-1">
          <div className="companies-holder">
            <img  style={{width:'185px',height:"100px", border: '1px solid ',}}
              src="https://assets.dukan.pk/pi/41/ks_img_1681898234_72772156628241.png"
              loading="lazy"
              alt="logo"
              className=""
            />
          </div>
          <p>University of Sialkot</p>
        </div>
      </a>
    </div>

    <div className="px-2" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
      <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
        <div className="companies-1">
          <div className="companies-holder">
            <img  style={{width:'185px',height:"100px", border: '1px solid ',}}
              src="https://assets.dukan.pk/pi/10/ks_img_1681898311_30028636628610.png"
              loading="lazy"
              alt="logo"
              className=""
            />
          </div>
          <p>University of the Punjab</p>
        </div>
      </a>
    </div>

    <div className="px-2" tabIndex="-1" style={{ width: '18px',
  height: '36px'}}>
      <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
        <div className="companies-1">
          <div className="companies-holder">
            <img  style={{width:'185px',height:"100px", border: '1px solid ',}}
              src="https://assets.dukan.pk/pi/10/ks_img_1681898311_30028636628610.png"
              loading="lazy"
              alt="logo"
              className=""
            />
          </div>
          <p>GCU Lahore</p>
        </div>
      </a>
    </div>


            {/* Add more universities here */}
          </Slider>
        </div>
        <p className="tagline-box mt-4"style={{textAlign:'center'}}>
          <h5>
            <span style={{ color: 'rgb(35, 31, 32)', backgroundColor: 'rgb(255, 255, 255)', fontSize: '24px', fontFamily: 'Axiforma' }}>
              <strong><em>Empowering our youth with in-demand skills and support to thrive in the fast-paced world of IT.</em></strong>
            </span>
          </h5>
        </p>
      </div>
    </section>
  );
};

export default UniversityAlliancesSection;