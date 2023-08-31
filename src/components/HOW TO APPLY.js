import React from 'react';

function HowtoApply() {
  return (
    <section className="career-section position-relative newgettingsection bg-white">
      <div className="h-100 container">
        <div className="align-items-center h-100 row">
          <div className="col-lg-6">
            <div className="careerText">
              <h1><span className="marker"><strong>Cohort 3 Starting September 11</strong></span></h1>
              <ul>
                <li style={{ color: '#e36800' }}>Zero Upfront Tuition</li>
                <li style={{ color: '#e36800' }}>Learn Now, Pay Later</li>
                <li>New programs for university graduates and professionals who do NOT have a programming background</li>
                <li>Evening timings for working professionals</li>
                <li>Begin your transformative journey with Knowledge Streams today!</li>
              </ul>
            </div>
          </div>
          <div className="position-static col-lg-6">
            <div className="careerBrand position-static text-right">
            <img
      style={{
        display: 'block',
        WebkitUserSelect: 'none',
        margin: 'auto',
        cursor: 'zoom-in',
        backgroundColor: 'hsl(0, 0%, 90%)',
        transition: 'background-color 300ms',
        maxWidth: '550px',
        height: '500px',
        marginBottom:"50px"
         
      }}
      src="https://knowledge.tech/assets/i/KnowledgeImages/gettingStarted-1.png"
      alt="Getting Started"
     
    />
            </div>
          </div>
        </div>
      </div>

      <section className="career-section position-relative newgettingsection bg-bluelight h-auto admission-section">
      <div className="container">
        <div className="row">
          <div className="position-static col-lg-6">
            <div className="careerBrand position-static">
            <img
      style={{
        display: 'block',
        WebkitUserSelect: 'none',
        margin: 'auto',
        cursor: 'zoom-in',
        backgroundColor: 'hsl(0, 0%, 90%)',
        transition: 'background-color 300ms',
        maxWidth: '550px',
        height: '500px',
        marginBottom:"50px"
      }}
      src="https://knowledge.tech/assets/i/KnowledgeImages/gettingStarted-2.png"
      alt="Getting Started"
     
    />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="careerText">
              <h4>The Admission Process</h4>
              <p>
                We have designed our admissions process to ensure a seamless journey from application submission to receiving your decision. Our admissions process breaks into the following simple steps:
              </p>

              <div className="ksAccordion admissionprocesssection accordion">
                {/* Step 1 */}
                <div className="border-0 card">
                  <button className="closed-class inactive accordianbtn d-flex align-items-center border-0 position-relative" type="button">
                    <span>1</span>Apply Now
                    <svg fill="none" height="13" viewBox="0 0 22 13" width="22" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.896484 1.64014L10.796 11.5396L20.7143 1.62134" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </button>
                  <div className="collapse">
                    <div className="card-body">
                    <div className="font-18">Fill out the application form with your details, including your name, email address, phone number, and other relevant information.</div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="border-0 card">
                  <button className="closed-class inactive accordianbtn d-flex align-items-center border-0 position-relative" type="button">
                    <span>2</span>Selection Process
                    <svg fill="none" height="13" viewBox="0 0 22 13" width="22" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.896484 1.64014L10.796 11.5396L20.7143 1.62134" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </button>
                  <div className="collapse">
                    <div className="card-body">
                      <ul>
                        <li>Will be done on Rolling Basis</li>
                        <li>Expect to hear from us within one-week of submission</li>
                        <li>Will convey decision on Admission</li>
                        <li>Final decision on the course to be taken will be dependent upon Skills Assessment Test taken on Day 1 of Classes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="border-0 card">
                  <button className="closed-class inactive accordianbtn d-flex align-items-center border-0 position-relative" type="button">
                    <span>3</span>Payment of Registration Fees
                    <svg fill="none" height="13" viewBox="0 0 22 13" width="22" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.896484 1.64014L10.796 11.5396L20.7143 1.62134" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </button>
                  <div className="collapse">
                    <div className="card-body">
                      <ul>
                        <li>Login to our website and click VIEW STATUS button</li>
                        <li>Click MAKE PAYMENT to pay Registration Fee</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="border-0 card">
                  <button className="closed-class inactive accordianbtn d-flex align-items-center border-0 position-relative" type="button">
                    <span>4</span>Confirmation of Admissions
                    <svg fill="none" height="13" viewBox="0 0 22 13" width="22" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.896484 1.64014L10.796 11.5396L20.7143 1.62134" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </button>
                  <div className="collapse">
                    <div className="card-body">
                      <table className="table table-bordered table-hover">
                        <tbody>
                          <tr>
                            <td className="font-18 w-50">Receipt of applications</td>
                            <td className="font-18 w-50">On Going</td>
                          </tr>
                          <tr>
                            <td className="font-18 w-50">Selection of candidates</td>
                            <td className="font-18 w-50">Offer of admission on a rolling basis</td>
                          </tr>
                          <tr>
                            <td className="font-18 w-50">Confirmation of Admission</td>
                            <td className="font-18 w-50">Upon payment of Registration Fee</td>
                          </tr>
                          <tr>
                            <td className="font-18 w-50">Start of training</td>
                            <td className="font-18 w-50">September 11, 2023</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className="career-section position-relative newgettingsection bg-white h-auto AdmissionsSchedule-section">
      <div className="container">
        <div className="align-items-center row">
          <div className="col-lg-12">
            <div className="careerText text-center">
              <h4 className="mb-4">Admissions Schedule</h4>
            </div>

            <table className="table table-bordered table-hover">
              <tbody>
                <tr>
                  <td className="font-18 w-50">Receipt of applications</td>
                  <td className="font-18 w-50">On Going</td>
                </tr>
                <tr>
                  <td className="font-18 w-50">Selection of candidates</td>
                  <td className="font-18 w-50">Enrollment confirmation in email on a rolling basis</td>
                </tr>
                <tr>
                  <td className="font-18 w-50">Registration fee payment deadline</td>
                  <td className="font-18 w-50">Conveyed via email</td>
                </tr>
                <tr>
                  <td className="font-18 w-50">Start of training</td>
                  <td className="font-18 w-50">September 11, 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section className="career-section position-relative newgettingsection bg-bluelight h-auto tutionsection">
      <div className="h-100 container">
        <div className="align-items-center h-100 row">
          <div className="col-lg-6">
            <div className="careerText">
              <h4>Payment of Fees</h4>

              <h3>Registration Fee</h3>

              <p>Secure your spot in the program by paying the registration fee within 3 days of receiving the offer of admission.</p>

              <div className="mb-3">
                <p className="mb-1">The offer of admission will be emailed to trainees, which will include the link for online payment.</p>
              </div>

              <div className="mb-2">
                <p className="mb-1 font-weight-bold">Banking information:</p>
                <span>You can also pay your fee in person at our facility or directly into our account. Please forward a screenshot of the payment to <a href="mailto:info@knowledge.tech">info@knowledge.tech</a> along with your name.</span>
              </div>
              <span className="d-block mb-1"><b>Bank Name:</b> Bank Alfalah</span>
              <span className="d-block mb-1"><b>Account title:</b> Knowledge Streams (PVT) LTD</span>
              <span className="d-block mb-1"><b>Account no (PKR):</b> PK50ALFH0137001008176716</span>
              <span className="d-block mb-1"><b>NIFT Code:</b> 05 30 125</span>
              <span className="d-block mb-1"><b>Branch name:</b> Model Town Branch Lahore</span>
            </div>
          </div>
          <div className="position-static col-lg-6">
            <div className="careerBrand position-static text-right">
            <img
      style={{
        display: 'block',
        WebkitUserSelect: 'none',
        margin: 'auto',
        cursor: 'zoom-in',
        backgroundColor: 'hsl(0, 0%, 90%)',
        transition: 'background-color 300ms',
        maxWidth: '550px',
        height: '500px',
        marginBottom:"50px" 
      }}
      src="https://knowledge.tech/assets/i/KnowledgeImages/gettingStarted-3.png"
      alt="Getting Started"
      
    />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="career-section position-relative newgettingsection bg-white h-auto admission-section">
      <div className="h-100 container">
        <div className="align-items-center h-100 row">
          <div className="position-static col-lg-6">
            <div className="careerBrand position-static">
            <img
      style={{
        display: 'block',
        WebkitUserSelect: 'none',
        margin: 'auto',
        cursor: 'zoom-in',
        backgroundColor: 'hsl(0, 0%, 90%)',
        transition: 'background-color 300ms',
        maxWidth: '550px',
        height: '500px',
        marginBottom:"50px"
        
      }}
      src="https://knowledge.tech/assets/i/KnowledgeImages/financialaid.png"
      alt="Financial Aid"
      
    />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="careerText">
              <h4>Learn Now, Pay Later</h4>

              <ul className="my-3">
                <li className="mb-4">Total Tuition Fee for the Advanced Programs is <b>Rs. 90,000 </b></li>
                <li className="mb-4">Total Tuition Fee for the Introductory Programs is <b>Rs. 45,000 </b></li>
                <li style={{ color: '#e36800' }}>Zero Upfront Tuition</li>
                <li>Tuition Fee is payable once the trainee successfully graduates from the training program and secures a job paying at least Rs. 75,000 per month.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="career-section position-relative newgettingsection bg-white h-auto AdmissionsSchedule-section">
      <div className="container">
        <div className="align-items-center row">
          <div className="col-lg-12">
            <div className="careerText text-center">
              <h4 className="mb-4"><b>Follow the simple step-by-step<br />process to get started</b></h4>
            </div>

            <div className="video_slider mx-auto applingvideo">
              <div className="slick-slider slick-initialized">
                <div className="slick-list">
                  <div className="slick-track" style={{ width: '740px', opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }}>
                    <div aria-hidden="false" className="slick-slide slick-active slick-current" data-index="0" style={{ outline: 'none', width: '740px' }} tabIndex="-1">
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }} tabIndex="-1">
                          <div className="video_area m-auto"><b><iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true} frameBorder="0" height="100%" src="https://www.youtube.com/embed/x9A5yEBubMc" title="Admission Process" width="930"></iframe></b></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="career-section bg-bluelight position-relative newgettingsection" id="support">
      <div className="h-100 container">
        <div className="align-items-center h-100 row">
          <div className="position-static col-lg-6">
            <div className="careerBrand"><b> <img
      style={{
        display: 'block',
        WebkitUserSelect: 'none',
        margin: 'auto',
        cursor: 'zoom-in',
        backgroundColor: 'hsl(0, 0%, 90%)',
        transition: 'background-color 300ms',
        maxWidth: '550px',
        height: '500px',
   
        marginBottom:"50px"
      }}
      src="https://knowledge.tech/assets/i/KnowledgeImages/gettingStarted-4.png"
      alt="Career Support"
      
    /></b></div>
          </div>

          <div className="col-lg-6">
            <div className="careerText">
              <h4><b>How will we support your career?</b></h4>

              <ul>
                <li style={{color: '#FFA500'}}><b style={{ color: '#ADD8E6'}}>Our Career Support team is dedicated to helping trainees and graduates launch their careers in the Tech industry</b></li>
                <li  style={{color: '#FFA500'}}><b style={{ color: '#ADD8E6'}}>We prepare our trainees for the job market from the first day</b></li>
                <li  style={{color: '#FFA500'}}><b style={{ color: '#ADD8E6'}}>Offer continuous support until trainees get a suitable position</b></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
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
 
    </section>





  );
}

export default HowtoApply;