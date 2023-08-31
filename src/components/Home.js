import React , { useState }from 'react';
import { useNavigate } from 'react-router-dom';
// Relative to the component's location

import KnowledgePartnerCarousel from './KnowledgePartnerCarousel';
import UniversityAlliancesSection from './UniversityAlliancesSection';
// Check the path




const Home = () => {
  const navigate = useNavigate();

  const handleApplyNowClick = () => {
    // Navigate to the "ApplyNow" page
    navigate.push('/APPLYNOW');
    
  };
  const handleCYBERSECURITYLearnMoreClick = () => {
    // Navigate to the desired route (e.g., '/learn-more')
    navigate.push('/CYBERSECURITY');
  };
  const handleTECHLAUNCHPADLearnMoreClick =() =>{
    navigate.push('/TECHLAUNCHPAD');
  };
  const handleDATASCIENCESLearnMoreClick =() =>{
    navigate.push('/DATASCIENCES');
  };
  const handlewebdevlopmentLearnMoreClick =() =>{
    navigate.push('/WEBDEVELOPMENT');
  };
  const videoUrls = [
    'https://www.youtube.com/embed/W5FPlku0-TE',
    'https://www.youtube.com/embed/84BQdl6JfBw',
    'https://www.youtube.com/embed/wbQYdx14ABQ',
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevClick = () => {
    // Decrement the activeSlide by 1, or loop back to the last slide if at the first slide
    setActiveSlide((prevSlide) => (prevSlide === 0 ? videoUrls.length - 1 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setActiveSlide((prevIndex) => (prevIndex === videoUrls.length - 1 ? 0 : prevIndex + 1));
  };
  
  

  return (
  
   <>

      <div className="row" style={{backgroundColor:" #FFC0CB"}}>
        <div className="col-lg-6"style={{marginTop:"120px",}}>
          <h1 style={{ paddingLeft: '70px', top: '35' }}>Land the job you desire</h1>
          <h3 style={{ textAlign: 'left' }}>
            <span
              style={{
                color: 'rgb(35, 31, 32)',
                
                fontSize: '16px',
                fontFamily: 'Axiforma',
                paddingLeft: '70px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <strong>Join the bootcamp at our corporate training facility, designed to help university graduates meet the global needs of the IT industry.</strong>
            </span>
          </h3>
          <h3 style={{ textAlign: 'left' }}>
            <span
              style={{
                color: 'rgb(35, 31, 32)',
               
                fontSize: '16px',
                fontFamily: 'Axiforma',
                paddingLeft: '70px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <strong>You will experience</strong>
            </span>
          </h3>
          <ul style={{ paddingLeft: '70px' }}>
            <li style={{ textAlign: 'left' }}>
              <span
                style={{
                  color: 'rgb(35, 31, 32)',
                 
                  fontSize: '16px',
                  fontFamily: 'Axiforma',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                Hands-on, face-to-face training
              </span>
            </li>
            <li style={{ textAlign: 'left' }}> <span
              style={{
                color: 'rgb(35, 31, 32)',
                
                fontSize: '16px',
                fontFamily: 'Axiforma',
                listStylePosition: 'inside',
                imageUrl: "check.png",

                listStyleImage: `url(${'check.png'})`,
                display: 'flex',
                justifyContent: 'space-between',


              }}
            > Ha Industry driven curriculum, real world projects </span></li>
            <li style={{ textAlign: 'left' }}> <span
              style={{
                color: 'rgb(35, 31, 32)',
                
                fontSize: '16px',
                fontFamily: 'Axiforma',
                display: 'flex',
                justifyContent: 'space-between',

              }}
            > Ha Soft skills development: communications, leadership, and teamwork </span></li>
            <li style={{ textAlign: 'left' }}> <span
              style={{
                color: 'rgb(35, 31, 32)',
                
                fontSize: '16px',
                fontFamily: 'Axiforma',
                display: 'flex',
                justifyContent: 'space-between',

              }}
            > Ha Intensive technical and culture fit interview preparation </span></li>

            <li style={{ textAlign: 'left' }}><span
              style={{
                color: 'rgb(35, 31, 32)',
               
                fontSize: '16px',
                fontFamily: 'Axiforma',
                display: 'flex',
                justifyContent: 'space-between',

              }}
            > Ha Networking with and mentoring by employers and industry leaders </span></li>

            {/* ... Other list items */}
          </ul>
          <a className="text-white" href="/applynow">
            <button type="button" className="btn btn-primary" style={{ display: 'block', margin: '0 auto', backgroundColor: 'skyblue',width:"200px",textDecoration:'none' }}
            onClick={handleApplyNowClick}>
              Apply Now
            </button>
          </a>
        </div>
        <div className='col-lg-6'>
          <div className='herobrandbox' style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <img
              style={{
                position: 'absolute',
                objectFit: 'cover',
                top: 0,
                right: 0,
                maxWidth: '600px',
                height: '500px',
              }}
              src="https://www.dukan.pk/demo//dtemp/bannerImage1687416349-47148996628874.png"
              alt="Description"
            />
          </div>
        </div>
      </div>



      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'skyblue', }}>
        <img
          style={{
            maxWidth: '550px',
            height: '500px',
            marginRight: '20px', // Adjust the spacing between image and content
          }}
          src="https://www.dukan.pk/demo//dtemp/bannerImage1687441619-21585056628772.png"
          alt="Description"
        />
        <div>
          <h2>Fast track your career</h2>
          <p>
            We help graduates from CS and IT fields, as well as those from EE, Math, Statistics, etc.,
            (Having a basic knowledge of computer science)
          </p>
          <ul>
            <li>12 weeks bootcamp</li>
            <li>360 hours of hands-on training</li>
            <li>Set your course to success</li>
          </ul>
          <h4>Our industry-driven curriculum prepares you to join the global IT workforce.</h4>
        </div>
      </div>



      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', }}>
        <div style={{ flex: 1 }}>
          <h2>The best course of action</h2>

          <ul>
            <li>Hands-on training</li>
            <li>Corporate culture and mannerisms</li>
            <li>Capstone project with industry</li>
          </ul>
          <p>It is hands-on, learning by doing, strengthening fundamentals, and building soft skills, while giving you expertise in a key technical area.</p>
        </div>
        <img
          style={{
            maxWidth: '550px',
            height: '500px',
            marginLeft: '20px', // Adjust the spacing between image and content
          }}
          src="https://www.dukan.pk/demo//dtemp/bannerImage1687441582-66818456628292.png"
          alt="balouch"
        />
      </div>





      <div style={{ display: 'flex', alignItems: 'center',backgroundColor:"#FFFFCC" }}>
        <img
          style={{
            maxWidth: '550px',
            height: '500px',
            marginRight: '20px', // Adjust the spacing between image and content
          }}
          src="https://www.dukan.pk/demo//dtemp/bannerImage1687441879-89866136628683.png"
          alt="shoaib"
        />
        <div>
          <h2>
            Master Soft Skills for Success</h2>
          <p>
            Essentials skills to help you in every walk of life
          </p>
          <ul>
            <li>Effective Communication</li>
            <li>Leadership</li>
            <li>Ethics</li>
            <li>Teamwork</li>
          </ul>
          <p>Our experiential technical and soft skills training empower IT professionals with a winning combination of technical expertise and essential soft skills demanded by industry</p>
        </div>
      </div>


      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', }}>
        <div style={{ flex: 1 }}>
          <h2>Build your personal brand</h2>

          <p>Show the world who you really are</p>

          <ul>
            <li>Resume Development</li>
            <li>LinkedIn dos and donts</li>
            <li>GitHub profile</li>
            <li>Technical interview preparation</li>
            <li>Culture fit interview readiness</li>
          </ul>
          <h4>Industry practitioners will mentor you in developing your brand, enabling you to stand out.</h4>
        </div>
        <img
          style={{
            maxWidth: '550px',
            height: '500px',
            marginLeft: '20px', // Adjust the spacing between image and content
          }}
          src="https://www.dukan.pk/demo//dtemp/bannerImage1687441643-75719226628210.png"
          alt="balouch 4"
        />
      </div>


      <div className='text-holder  text-center mb-3'>
        <h3> What Course will you be taking</h3>
      </div>


      <div className="row" style={{}}>
        <div className="col-md-3">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://www.dukan.pk/demo/dtemp/ptImg1681467140-29790856628638.png" className="card-img-top" alt="balouch category" />
            <div className="card-body">
              <h5 className="card-title">Tech Launchpad</h5>
              <p className="card-text"> Courses designed for university graduates with minimal or no background in programming. Any university graduate and working professional can learn the basics of programming that will allow them to then take any bootcamp in web development,</p>
              <p> <strong> You can Learn</strong></p>
              <p> Introduction to Programming
                Introduction to Data Science and Artificial Intelligence</p>
              <a href="/" className="btn btn-primary"style={{ display: 'block', margin: '0 auto', backgroundColor: 'skyblue' }}onClick={handleTECHLAUNCHPADLearnMoreClick}>Learn more</a>

            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://www.dukan.pk/demo/dtemp/ptImg1681467105-71997466628537.png" className="card-img-top" alt="balouch category" />
            <div className="card-body">
              <h5 className="card-title">Cyber Security</h5>
              <p className="card-text">You can learn the foundational knowledge required to understand cybersecurity and web application security</p>
              <p> <strong> You can be a</strong></p>
              <p> Cyber Security Analyst
                Information Security Analyst
                Network Security Engineer</p>
              <a href="/" className="btn btn-primary"style={{ display: 'block', margin: '0 auto', backgroundColor: 'skyblue' }}onClick={handleCYBERSECURITYLearnMoreClick}>Learn more</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://www.dukan.pk/demo/dtemp/ptImg1681466785-82384886628434.png" className="card-img-top" alt="balouch category" />
            <div className="card-body">
              <h5 className="card-title">Data Science</h5>
              <p className="card-text">Unleash your inner geek and make a career in data analysis, data visualization, predictive modeling and deep learning using Tableau and Python</p>
              <p> <strong> You can be a</strong></p>
              <p> Data Analyst
                Data Engineer
                Business Intelligence Analyst
                Machine Learning Engineer
                Data Mining Engineer</p>
              <a href="/" className="btn btn-primary"style={{ display: 'block', margin: '0 auto', backgroundColor: 'skyblue' }}onClick={handleDATASCIENCESLearnMoreClick }>Learn more</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://www.dukan.pk/demo/dtemp/ptImg1681467140-29790856628638.png" className="card-img-top" alt="balouch category" />
            <div className="card-body">
              <h5 className="card-title">Web Developer</h5>
              <p className="card-text">Deep dive into the basics of frontend, backend, databases, APIs and more. You can be a Full stack developer or a specialist in a specific framework by attending one of the following courses</p>
              <p> <strong> You can Learn</strong></p>
              <ul>
                <li>MERN</li>
                <li>MEAN</li>
                <li>Angular</li>
                <li>React</li>
                <li>Node</li>
              </ul>
              <a href="/" className="btn btn-primary"style={{ display: 'block', margin: '0 auto', backgroundColor: 'skyblue' }}onClick={handlewebdevlopmentLearnMoreClick}>Learn more</a>
            </div>
          </div>
        </div>
      </div>

      <div className="text_holder text-center mb-4">

        <h2 className="mb-2">Our graduates say it best</h2>
        <p>
          <span style={{ color: 'rgb(35, 31, 32)', backgroundColor: 'rgb(255, 255, 255)', fontSize: '17px', fontFamily: 'Axiforma' }}>
            Successful graduates of our training programme share how our training and career support led
          </span>
          <span style={{ color: 'rgb(35, 31, 32)', backgroundColor: 'rgb(255, 255, 255)', fontSize: '17px', fontFamily: 'Axiforma' }}>
            to a better career and higher income.
          </span>
        </p>


      </div>


      <section className="courses_secton bg-yellowlight">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {videoUrls.map((videoUrl, index) => (
          <div key={index} className={`carousel-item ${index === activeSlide ? 'active' : ''}`}>
            <iframe
              width="640"
              height="420"
              style={{
                textAlign: 'center',
                display: 'block',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                margin: '0 auto',
              }}
              src={videoUrl}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"style={{color:'white'}}
        type="button"
        onClick={handlePrevClick}
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"style={{ fontSize: '30px', color: 'red' }}></span>
        <span className="visually-hidden">&rarr; Previous</span>
      </button>
      <button
        className="carousel-control-prev" style={{color:'white'}}
        type="button"
        onClick={handleNextClick}
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"style={{ fontSize: '30px', color: 'red' }}></span>
        <span className="visually-hidden">Next &rarr;</span>
      </button>
      {/* Add your next button code here */}
    </div>
    </section>


     

    <div className="md-2"style={{ marginTop: '20px' }}>
     
<KnowledgePartnerCarousel />
</div>


<section className="courses_secton bg-yellowlight"style={{ marginTop: '50px'}}>
      <div className="container-fluid">
        {/* Content before the video slider */}
       

        {/* Video slider */}
        <div className="video_slider mx-auto mt-3">
          <div className="slick-slider slick-initialized">
            <div className="slick-list">
              <div className="slick-track" style={{ width: '359px', opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }}>
                <div data-index="0" className="slick-slide slick-active slick-current" tabIndex="-1" aria-hidden="false" style={{ outline: 'none', width: '359px' }}>
                  <div>
                    <div tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
                      <div className="video_area m-auto">
                        {/* Embed your YouTube video here */}
                        <iframe
                        width="640"
                        height="420"
                        style={{
                          textAlign: 'center',
                          display: 'block',
                          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                          margin: '0 auto',
                        }}
                          src="https://www.youtube.com/embed/dU14EmBUM4U"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         {/* Tagline */}
         <p className="tagline-box mt-4"style={{textAlign:'center'}}>
          <h5>
            <span style={{ color: 'rgb(35, 31, 32)', backgroundColor: 'rgb(255, 255, 255)', fontSize: '24px', fontFamily: 'Axiforma' }}>
              <strong><em>Transforming Pakistan's Tech Landscape through Shared Expertise and Resources</em></strong>
            </span>
          </h5>
        </p>
      </div>
    </section>
    <div style={{ marginTop: '50px'}}>
<UniversityAlliancesSection/>
</div>
    
<div className="d-none d-md-block spring_footer py-3"
    style={{background: '#231f20',color: 'white', textDecoration: 'none', marginTop: '70px',height:'400px' ,  }}      >
  <div className="container">
    <div className="top-footer">
      <div className="row">
        <div className="col-md-3">
          <div className="footer_box"style={{marginBottom: '10px'}}>
            <h4>Useful Links</h4>
            <div className="footer_Links">
              <a className="d-block font-12" href="/knowledgehome"style={{ color: '#FAF0E6', textDecoration: 'none',marginBottom: '10px'}}> Home</a>
              <a className="d-block font-12" href="/executiveteam"style={{ color: '#FAF0E6', textDecoration: 'none',marginBottom: '10px' }}> Executive Team</a>
              <a className="d-block font-12" href="/knowledgepartner"style={{ color: '#FAF0E6' , textDecoration: 'none',marginBottom: '10px'}}> Knowledge Partners</a>
              <a className="d-block font-12" href="/university"style={{ color: '#FAF0E6', textDecoration: 'none',marginBottom: '10px' }}> University Alliances</a>
              <a className="d-block font-12" href="/knowledgeTestimonials"style={{ color: '#FAF0E6', textDecoration: 'none',marginBottom: '10px' }}> Testimonials</a>
              <a className="d-block font-12" href="/technicalProgrammes"style={{ color:'#FAF0E6', textDecoration: 'none',marginBottom: '10px' }}> Technology</a>
              <a className="d-block font-12" href="/softskill"style={{ color: '#FAF0E6', textDecoration: 'none',marginBottom: '10px' }}> Soft Skills</a>
              <a className="d-block font-12" href="/contactus"style={{ color: '#FAF0E6' , textDecoration: 'none',marginBottom: '10px'}}> Contact Us</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer_box">
            <h4>Contact Us</h4>
            <div className="footer_Links">
              <a className="d-block font-12" href="mailto:info@knowledge.tech"style={{ color: '#FAF0E6' , textDecoration: 'none',marginBottom: '10px'}}> Email: info@knowledge.tech</a>
              <a className="d-block font-12" href="/"style={{ color: '#FAF0E6', textDecoration: 'none',marginBottom: '10px' }}>Call us: +923041116062</a>
              <a className="d-block font-12" href="/"style={{ color: '#FAF0E6', textDecoration: 'none' ,marginBottom: '10px'}}>Time: Mon-Fri: 10:00 AM - 5:00 PM</a>
            </div>
          </div>
        </div>
        <div className="col-md-2">
  <div className="footer_box"style={{marginBottom: '10px',fontSize: '15px',
  marginRight: '10px',
  marginTop: '-2px'}}>
    <h4>Follow Us</h4>
    <div className="d-flex footer_Links flex-column">
      <a target="_blank" href="/https://twitter.com/knowstreamstech" className="d-flex align-items-center "style={{ color:'#FAF0E6' , textDecoration: 'none', marginBottom: '10px'}}>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="25px" // Adjust width and height as needed
      height="25px"
    >
      {/* Paste your SVG path here */}
      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
    </svg>
        Twitter
      </a>
      <a target="_blank" href="/https://www.facebook.com/knowledgestreams" className="d-flex align-items-center"style={{ color: '#FAF0E6', textDecoration: 'none', marginBottom: '10px' }}>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="25px" // Adjust width and height as needed
      height="25p"
    >
      {/* Paste your SVG path here */}
      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
    </svg>
        <i className='fa fa-facebook'>{/* Replace with Facebook SVG */}</i>
        Facebook
      </a>
      <a target="_blank" href="/https://www.instagram.com/knowstreamstech/" className="d-flex align-items-center"style={{ color: '#FAF0E6', textDecoration: 'none', marginBottom: '10px' }}>
      <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width="25px" // Adjust width and height as needed
      height="25px"
    >
      {/* Paste your SVG path here */}
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
        <i className='fa fa-instagram'>{/* Replace with Instagram SVG */}</i>
        Instagram
      </a>
      <a target="_blank" href="/https://www.youtube.com/@Knowledgestreams" className="d-flex align-items-center"style={{ color: '#FAF0E6', textDecoration: 'none', marginBottom: '10px' }}>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      width="25px" // Adjust width and height as needed
      height="25px"
    >
      {/* Paste your SVG path here */}
      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
    </svg>
        <i className='fa fa-Youtube'>{/* Replace with YouTube SVG */}</i>
        YouTube
      </a>
      <a target="_blank" href="/https://www.linkedin.com/company/knowledgestreams/" className="d-flex align-items-center"style={{ color: '#FAF0E6' , textDecoration: 'none',lineHeight: '23px', marginBottom: '8px'}}>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width="25px" // You can set the width and height as needed
      height="25px"
    >
      {/* Paste your SVG path here */}
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
        <i className='fa fa-LinkdIn'>
          {/* Replace with LinkedIn SVG */}
        </i>
        LinkedIn
      </a>
    </div>
  </div>
</div>
        <div className="col-md-4">
          <div className="footer_box">
            <p>Knowledge Streams © 2023 All Rights Reserved.</p>
            <p className="mt-2">Powered by shoaib balouch</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 




      </>
      )
}



    



      export default Home