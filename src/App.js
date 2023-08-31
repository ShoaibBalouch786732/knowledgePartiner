import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';


import FAQS from './components/FAQS';
import ExuctiveTeam from './components/Exuctive Team';
import HOWTOAPPLY from './components/HOW TO APPLY';

import APPLYNOW from './components/APPLYNOW';
import Createanaccount from './components/Create an account';
import KNOWLEDGEPARTINERS from './components/KNOWLEDGE PARTINERS';
import UNIVERSTYALLIANCES from './components/UNIVERSTY ALLIANCES';
import TESTIMONIALS from './components/TESTIMONIALS';
import TECHLAUNCHPAD from './components/TECH LAUNCHPAD';
import DATASCIENCES from './components/DATA SCIENCES';
import CYBERSECURITY from './components/CYBER SECURITY';
import WEBDEVELOPMENT from './components/WEB DEVELOPMENT';
import SOFTSKILLS from './components/SOFT SKILLS';
import CONTACTUS from './components/CONTACT US';
import Alert from './components/Alert';





function App() {
  return (
    
    <Router>
      
      <Alert/>
      <Navbar />
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Exuctive Team" element={<ExuctiveTeam />} />
        
        <Route exact path="/APPLYNOW" element={<APPLYNOW />} />
        <Route exact path="/HOW TO APPLY" element={<HOWTOAPPLY />} />
        <Route exact path="/Create an account" element={<Createanaccount />} />
       
<Route exact path="/FAQS" element={<FAQS />} />
<Route exact path ='/KNOWLEDGE PARTINERS' element={<KNOWLEDGEPARTINERS/>}/>
<Route exact path='/UNIVERSTY ALLIANCES' element={<UNIVERSTYALLIANCES/>}/>
<Route exact path='/TESTIMONIALS' element={<TESTIMONIALS/>} />
<Route exact path='/TECH LAUNCHPAD' element={<TECHLAUNCHPAD/>}/>
<Route exact path='/DATA SCIENCES' element={<DATASCIENCES/>}/>
<Route exact path='/CYBER SECURITY' element={<CYBERSECURITY/>}/>
<Route exact path='/WEB DEVELOPMENT' element={<WEBDEVELOPMENT/>}/>
<Route exact path='/SOFT SKILLS' element={<SOFTSKILLS/>}/>
<Route exact path='/CONTACT US'element={<CONTACTUS/>}/>
      </Routes>
     
    </Router>
    
  );
}

export default App;
