import React from 'react'


import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const KnowledgePartnerCarousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rows: 2, 
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 2,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2, 
          // Number of slides per row for smaller screens
          slidesToScroll: 2, // Number of slides to advance for smaller screens
          // Number of rows for smaller screens// Number of slides to show when screen width is below 768px
        },
      },
    ],
  };
  return (
    <section className="courses_secton bg-yellowlight">
    <div className="container-fluid">
     
 
      <div className="container-fluid">
        <div className="text_holder text-center mb-4">
          <h3 className="mb-2">Our Knowledge Partners</h3>
          <p>
            <h4>
              <span
                style={{
                  color: 'rgb(35, 31, 32)',
                  backgroundColor: 'rgb(255, 247, 241)',
                  fontSize: '17px',
                  fontFamily: 'Axiforma',
                }}
              >
                Knowledge Partner Companies share our vision of a prosperous Pakistan, taking cognizance of global opportunities in the IT industry
              </span>
            </h4>
          </p>
        </div>
        {/* Add the rest of your content here */}
      </div>
      <div className="slick-slider">
        <Slider {...settings}>
          {/* University 1 */}
          <div className="px-2" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
      <a href="/knowledgepartner"style={{ textDecoration: 'none', color: 'black' }}>
        <div className="companies-1">
          <div className="companies-holder">
            <img  style={{width:'185px',height:"100px"}}
              src="https://assets.dukan.pk/pi/16/ks_img_1687852866_67536219575716.jpg"
              loading="lazy"
              alt="logo"
              className=""
            />
          </div>
          <p>TiE Islamabad</p>
        </div>
      </a>
    </div>
          {/* University 2 */}
          <div className="px-2"style={{ textDecoration: 'none', color: 'black' }}>
            <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
              <div className="companies-1">
                <div className="companies-holder">
                  <img  style={{width:'185px',height:"100px"}}
                   src="https://assets.dukan.pk/pi/24/ks_img_1681897695_45645866628524.png" 
                    loading="lazy"
                    alt="logo"
                    className=""
                  />
                </div>
                <p>EMPG LABS</p>
              </div>
            </a>
          </div>

          {/* University 3 */}
          <div className="px-2">
            <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
              <div className="companies-1">
                <div className="companies-holder">
                  <img style={{width:'185px',height:"100px"}}
                     src="https://assets.dukan.pk/pi/54/ks_img_1687851840_30598509575354.png"
                    loading="lazy"
                    alt="logo"
                    className=""
                  />
                </div>
                <p style={{
    color: 'rgb(35, 31, 32)', // Set your desired text color here
    backgroundColor: 'rgb(255, 247, 241)',
    fontSize: '17px',
    fontFamily: 'Axiforma',
  }}>Emblem Technologies</p>
              </div>
            </a>
          </div>




          <div className="px-2" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
    <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
      <div className="companies-1">
        <div className="companies-holder">
          <img  style={{width:'185px',height:"100px", border: '1px solid black',}}
           src="https://assets.dukan.pk/pi/28/ks_img_1687851759_25789079575228.jpg"
            loading="lazy"
            alt="logo"
            className=""
          />
        </div>
        <p style={{
    color: 'rgb(35, 31, 32)', // Set your desired text color here
    backgroundColor: 'rgb(255, 247, 241)',
    fontSize: '17px',
    fontFamily: 'Axiforma',
  }}>Confiz</p>
      </div>
    </a>
  </div>

  <div className="px-2" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
    <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
      <div className="companies-1">
        <div className="companies-holder">
          <img style={{width:'185px',height:"100px", border: '1px solid black',}}
            src="https://assets.dukan.pk/pi/28/ks_img_1687851759_25789079575228.jpg"
            loading="lazy"
            alt="logo"
            className=""
          />
        </div>
        <p>Cheetay</p>
      </div>
    </a>
  </div>

  <div className="px-2" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
    <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
      <div className="companies-1">
        <div className="companies-holder">
          <img  style={{width:'185px',height:"100px", border: '1px solid black',}}
           src="https://assets.dukan.pk/pi/97/ks_img_1687765701_62020929575697.jpg"
            loading="lazy"
            alt="logo"
            className=""
          />
        </div>
        <p>Bridgelinx</p>
      </div>
    </a>
  </div>
  
  <div className="px-2" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
    <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
      <div className="companies-1">
        <div className="companies-holder">
          <img  style={{width:'185px',height:"100px", border: '1px solid black',}}
           src="https://assets.dukan.pk/pi/22/ks_img_1687851740_62444249575622.png"
            loading="lazy"
            alt="logo"
            className=""
          />
        </div>
        <p>Arbisoft</p>
      </div>
    </a>
  </div>
  
  <div className="px-2" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
    <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
      <div className="companies-1">
        <div className="companies-holder">
          <img  style={{width:'185px',height:"100px", border: '1px solid black',}}
          src="https://assets.dukan.pk/pi/21/ks_img_1687765757_13811999575421.jpg"
            loading="lazy"
            alt="logo"
            className=""
          />
        </div>
        <p>AppRocket</p>
      </div>
    </a>
  </div>
  
  <div className="px-2" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
    <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
      <div className="companies-1">
        <div className="companies-holder">
          <img style={{width:'185px',height:"100px", border: '1px solid black',}}
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
          <img style={{width:'185px',height:"100px", border: '1px solid black',}}
            src="https://assets.dukan.pk/pi/16/ks_img_1687852866_67536219575716.jpg"
            loading="lazy"
            alt="logo"
            className=""
          />
        </div>
        <p>TiE Islamabad</p>
      </div>
    </a>
  </div>

  <div className="px-2" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
    <a href="/university"style={{ textDecoration: 'none', color: 'black' }}>
      <div className="companies-1">
        <div className="companies-holder">
          <img  style={{width:'185px',height:"100px", border: '1px solid black',}}
          src="https://assets.dukan.pk/pi/28/ks_img_1687851692_21294959575828.jpg"
            loading="lazy"
            alt="logo"
            className=""
          />
        </div>
        <p>Abacus</p>
      </div>
    </a>
  </div>

  <div>
          <div className="px-2">
            <a href="/knowledgepartner"style={{ textDecoration: 'none', color: 'black' }}>
              <div className="companies-1">
                <div className="companies-holder">
                  <img  style={{width:'185px',height:"100px", border: '1px solid black',}}
                    src="https://assets.dukan.pk/pi/37/ks_img_1692336636_48444906628337.png"
                    loading="lazy"
                    alt="logo"
                    className=""
                  />
                </div>
                <p>Machine Learning 1 Limited</p>
              </div>
            </a>
          </div>
        </div>


          {/* Add more universities here */}
        </Slider>
      </div>
      
    </div>
  </section>
  )
}

export default KnowledgePartnerCarousel