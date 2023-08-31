import React from 'react';

const Accordion = () => {
  // Generate unique IDs for each accordion item
  const generateUniqueId = (index) => `collapse-${index}`;

  // Array of accordion items
  const accordionItems = [
    {
      title: 'Is financial aid available?',
      content: (
        <ul>
          <li>There is zero upfront tuition fee.</li>
          <li>Tuition Fee is Payable after you graduate and get a job.</li>
        </ul>
      ),
    },
    {
      title: 'Do I need any prior coding experience to enroll in the Bootcamp?',
      content: [
        'There is zero upfront tuition fee.',
        'Tuition Fee is Payable after you graduate and get a job.',
      ],
    },
    {
      title: 'What kind of career support will be available after completing the Bootcamp?',
      content:[
        'Yes, there will be networking sessions with industry professionals, giving trainees the chance to meet and connect with people working in the tech industry.'
      ]
    },
    {
      title: 'What are the costs?',
      content: [
        'Yes, trainees will have access to industry veterans who will serve as mentors throughout the Bootcamp'
      ]
    }, {
      title: 'What is the structure of the remote learning day?',
      content:['There will be two sessions the first shift will be from 9am to 2pm, and the second shift will be from 2:30pm to 7:30pm.']
    },
    {
      title: 'Is financial aid available?',
     content:['There will be two sessions the first shift will be from 9am to 2pm, and the second shift will be from 2:30pm to 7:30pm.']
    },
    {
      title: 'Do I need any prior coding experience to enroll in the Bootcamp?',
      content:['There will be two sessions the first shift will be from 9am to 2pm, and the second shift will be from 2:30pm to 7:30pm.']
    },
    {
      title: 'Where will the Bootcamp be held?',
      content:['At our campus located at 157M Madar e Millat Road, Township, Lahore.']
    },
    // Add more items as needed
  ];

  return (
    <div className="col-lg-12">
    <div className="container">
      <h2>Frequently Asked Questions</h2>
    <div className="accordion" id="accordionExample">
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={index} style={{ marginBottom: '40px', backgroundColor: '#e6eaf0' }}>
          <h2 className="accordion-header" id={`heading-${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${generateUniqueId(index)}`}
              aria-expanded="false"
              aria-controls={`collapse-${index}`}
            >
             <strong> {item.title}</strong>
            </button>
          </h2>
          <div id={generateUniqueId(index)} className="accordion-collapse collapse" aria-labelledby={`heading-${index}`} data-bs-parent="#accordionExample">
            <div className="accordion-body">
            {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
   
<section>
  
<div className="d-none d-md-block spring_footer py-3"
    style={{background: '#231f20',color: 'white', marginTop: '70px',height:'400px' ,padding:'70px 0' }}      >
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
</div>
</div>


  );
};

export default Accordion;
