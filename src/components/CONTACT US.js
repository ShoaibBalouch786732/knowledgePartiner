import React ,{useState}from 'react'

const CONTACTUS = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleNameInputChange = (e) => {
    const newName = e.target.value;
    setFormData({ ...formData, name: newName });
    
  };
  const handleEmailInputChange = (e) => {
    const newEmail = e.target.value;
    setFormData({ ...formData, email: newEmail });
  };
  const handleMessageInputChange = (e) => {
    const newMessage = e.target.value;
    setFormData({ ...formData, message: newMessage });
  };
  // Handle form field changes
  const handlesubjectInputChange = (e) => {
  
    
    
    const newsubjeect = e.target.value;
    setFormData({ ...formData, message: newsubjeect });
    // Reset error for this field
   
  };
  // Handle form submission
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Create an object to track errors
    const newErrors = {
      name: formData.name === '',
      email: formData.email === '',
      message: formData.message === '',
      subject:formData.subject === ''
    };
  
    // Set the errors object
    setErrors(newErrors);
  
    // Check if any errors exist
    const hasErrors = Object.values(newErrors).some((error) => error);
  
    // If there are no errors, proceed with form submission
    if (!hasErrors) {
      // Handle form submission logic here, e.g., send data to an API
      console.log('Form submitted:', formData);
  
      // Show a success message or alert
      alert('Form submitted successfully');
  
      // You can also clear the form fields or reset the formData state here if needed
      // setFormData({ name: '', email: '', message: '' });
    }
  };
  return (
    
    <section className="testimonial-sec position-relative mt-3">
    <div className="conatctPage">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="conatctform">
              <h4 className="font-30">Contact Us</h4>
              <div className="conactinfopage text-center">
                <div className="justify-content-center row">
                  <div className="col-md-4 col-6">
                    <div className="text-left">
                      <div className="text-center contactUs_icon">
                      <i class="fa-solid fa-mobile">
                      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 512" // Set the viewBox attribute to define the coordinate system
      width="120"            // Set the width of the SVG
      height="120"           // Set the height of the SVG
    >
      <path
        d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
        fill="currentColor" // Set the fill color of the path
      />
    </svg>
                      </i>
                        <span className="font-weight-bold d-block mt-2">Phone Number</span>
                        <p>03041116062</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="text-left">
                      <div className="text-center contactUs_icon">
                      <i class="icon-envelope">
                      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="120"
      height="120"
    >
      <path
        fill="currentColor"
        d="M21.9 3H2.1C1 3 0 4 0 5.1v13.8C0 20 1 21 2.1 21h19.8c1.1 0 2.1-1 2.1-2.1V5.1C24 4 23 3 21.9 3zM22 18c0 .6-.5 1.1-1.1 1.1H3.1C2.5 19.1 2 18.6 2 18V7.4l10 6.1 10-6.1V18zM12 13.1L2.5 7h19L12 13.1zM2.5 17L12 11.1 21.5 17H2.5z"
      />
    </svg>
                        </i> 
                        <span className="font-weight-bold d-block mt-2">Email Address</span>
                        <p><a href="mailto:info@knowledge.tech"style={{ textDecoration: 'none',color:'black'}}>info@knowledge.tech</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="text-left">
                      <div className="text-center contactUs_icon">
                        <i className="icon-map-holder">
                        <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512" // Set the viewBox attribute to define the coordinate system
      width="120"            // Set the width of the SVG
      height="120"           // Set the height of the SVG
    >
      <path
        d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z"
        fill="currentColor" // Set the fill color of the path
      />
    </svg>
                        </i>
                        <span className="font-weight-bold d-block mt-2">Our Address</span>
                        <p>157-M, Madar-e-Millat Road, Quaid e Azam Industrial Estate, Lahore, Punjab PK</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="font-30 font-weight-bold mb-2 mt-3"style={{marginLeft:'70px'}}>Feedback Form</h4>
      <div className="row"style={{marginLeft:'50px'}}>
        <div className="col-md-4"style={{marginLeft:'70px'}}>
          <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
            <label className="font-14 form-label" htmlFor="formBasicName">Full Name</label>
            <input
        type="text"
        className="form-control"
        id="exampleInputName"
        aria-describedby="nameHelp"
        value={formData.name}
        onChange={handleNameInputChange}
      />
      {errors.name && (
        <span className="text-danger font-12">Name is Required</span>
      )}
          </div>
        </div>
        <div className="col-md-4">
          <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
            <label className="font-14 form-label" htmlFor="formBasicEmail">Email Address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formData.email}
              onChange={handleEmailInputChange}/>
               {errors.email && <span className="text-danger font-12">Email is Required</span>}
          </div>
        </div>
        <div className="col-md-4">
          <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
            <label className="font-14 form-label"style={{marginLeft:'50px'}} htmlFor="formBasicPhone">Subject</label>
            <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        onChange={handlesubjectInputChange}
      />
      {errors.subject && (
        <span className="text-danger font-12">Subject is Required</span>
      )}
          </div>
        </div>
      </div>
      <form className="conactform-spring"style={{marginLeft:'70px'}}onchange={handleSubmit}>
        <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
          <label className="font-14 form-label" htmlFor="exampleForm.ControlTextarea1">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"value={formData.message}
            onChange={handleMessageInputChange}></textarea>
            {errors.message && <span className="text-danger font-12">Message is Required</span>}
        </div>
        <button type="submit"style={{ textDecoration: 'none',color:'black',backgroundColor:'lightskyblue',margin:'20px'}} className="text-uppercase font-weight-bold font-16 btn btn-link" onChange={handleSubmit}>Submit</button>

      </form>
    </div>


    <section>

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

  </section>

  );
}

export default CONTACTUS
