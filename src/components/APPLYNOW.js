import React,{useState} from 'react';

function APPLYNOW() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleContinueClick = () => {
    // Add your custom logic here that should be executed when the "Continue" button is clicked
    if (!fullName || !phoneNumber || !email) {
      alert('Please fill out all required fields.');
    } else {
      // All required fields are filled, you can proceed with your logic
      alert('Success! Your form has been submitted.');
      // For example, navigate to the next page or submit the form data.
    }
  };
  const handlebackClick = () => {
    // Replace '/knowledgehome' with the actual URL of your home page
    window.location.href = '/Home';
  };
 

  const formStyles = {
    position: 'absolute', // Position the form absolutely within the container
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -50%)', // Center the form precisely
    maxWidth: '80%', // Limit the form width to 80% of the container width
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add a semi-transparent background
    padding: '20px', // Add some padding to the form
    borderRadius: '5px', // Add rounded corners
  };
  const overlayStyles = {
    position: 'relative', // Position the overlay relative to its container
    textAlign: 'center', // Center-align the content
    padding: 0, // Remove padding
    backgroundImage: 'url("https://knowledge.tech/assets/i/KnowledgeImages/1.png")', // Add the background image URL
    backgroundSize: 'cover', // Cover the entire container with the background image
    backgroundPosition: 'center', // Center the background image
    color: '#fff', // Set text color to white (assuming you want white text on the image)
    width: '550px', // Set the width of the background image
    height: '700px', // Set the height of the background image
    display: 'flex', // Center the content vertically and horizontally
  flexDirection: 'column', // Stack the content vertically
  justifyContent: 'center', // Center the content vertically
  alignItems: 'center', // Center the content horizontally
  };
  const ulStyles = {
    listStyleType: 'none', // Remove list bullets
    paddingLeft: 0, // Remove default padding for ul
    display: 'inline-block', // Display the ul as an inline-block element
    textAlign: 'left', // Left-align the content within ul
  };
  
  const liStyles = {
    marginBottom: '10px', // Add margin between list items
    textAlign: 'center', // Center-align the list items
  };
  
  return (
    <section className="vh-100 form-section">
      <div className="Toastify"></div>
      <div className="no-gutters h-100 row">
        <div className="h-100 order-2 order-md-1 col-lg-6">
          <div className="createBrand h-100">
            <div className="image-container">
              {/* Your image goes here */}
             
              {/* Your image overlay content */}
              <div className="inqueryimgText" style={overlayStyles}>
                {/* Content within the overlay */}
                <h5>Location -- Lahore</h5>
              <ul>
                <li style={liStyles}>Bootcamp Starts September 11</li>
              </ul>
              <h5 className="mb-3 mt-3">Tech Launchpad for All</h5>
              <ul>
                <li style={liStyles}>Intro to Programming</li>
                <li style={liStyles}>Intro to Data Science & AI</li>
              </ul>
              <h5 className="mb-3 mt-3">Advanced Courses for All with Knowledge of CS Fundamentals</h5>
              <ul style={ulStyles}>
                <liv style={liStyles}>MERN</liv>
                <li style={liStyles}>Data Sciences: Machine Learning</li>
                <li style={liStyles}>Python & Django: Web Development</li>
                <li style={liStyles}>Cyber Security</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="h-100 order-1 order-md-2 col-lg-6">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div style={formStyles}>
              <h3 className="font-weight-bold text-left">Apply Now</h3>
              <form className="w-100 createform">
                {/* Your form content */}
                <div className="form-group">
        <label className="form-label">
          Full Name<span>*</span>
        </label>
        <input
  type="email"
  className="form-control"
  id="exampleInputName"
  aria-describedby="emailHelp"
  placeholder="Enter your full name"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
/>
      </div>
      <div className="form-group">
        <label className="form-label">
          Mobile Number<span>*</span>
        </label>
        <input
    type="tel"  // Change the type to "tel" for phone numbers
    className="form-control"
    id="exampleInputPhoneNumber"  // Adjust the ID as needed
    aria-describedby="phoneNumberHelp"  // Adjust the ARIA attributes as needed
    placeholder="Enter your phone number"  // Update the placeholder text
    style={{ width: '100%' }} 
    onChange={(e) => setPhoneNumber(e.target.value)}
   
  /> 
        <div className="no-gutters row">
          <div className="col-6 col">
         
          </div>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">
          Email Address<span>*</span>
        </label>
        <input
  type="email"
  className="form-control"
  id="exampleInputEmail1"
  aria-describedby="emailHelp"
  placeholder="Enter your email address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-4 col">
            <a href="/knowledgehome">
            <button type="button" class="btn btn-danger"style={{marginTop: '40px', marginBottom: '40px',}}onClick={handlebackClick}>Back</button>
            </a>
          </div>
          <div className="col-8 col">
          <button type="button" class="btn btn-danger"style={{marginTop: '40px', marginBottom: '40px',}}
              onClick={handleContinueClick}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default APPLYNOW;
