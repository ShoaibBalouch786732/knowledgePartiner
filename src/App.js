import React,{useState} from 'react';
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
  const [alert, setAlert] = useState(null);
   const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },3000)
   }

  return (
    
    <Router>
      
      <Alert alert={alert}/>
      <Navbar showAlert={() => showAlert(' Accepting Applications for Next Cohort Starting on 11th September. Apply Now.', 'knowledge.tech! ')}/>
      <Routes>
        <Route exact path="/Home" element={<Home showAlert={showAlert}/>}  />
        <Route exact path="/Login" element={<Login  showAlert={() => showAlert('Accepting Applications for Next Cohort Starting on 11th September. Apply Now.', 'knowledge.tech! ')} />} />
        <Route exact path="/Exuctive Team" element={<ExuctiveTeam  showAlert={() => showAlert('Accepting Applications for Next Cohort Starting on 11th September. Apply Now. ', 'knowledge.tech! ')}/>} />
        
        <Route exact path="/APPLYNOW" element={<APPLYNOW  showAlert={() => showAlert('Accepting Applications for Next Cohort Starting on 11th September. Apply Now.', 'success')}/>} />
        <Route exact path="/HOW TO APPLY" element={<HOWTOAPPLY  showAlert={() => showAlert('Accepting Applications for Next Cohort Starting on 11th September. Apply Now.', 'success')} />} />
        <Route exact path="/Create an account" element={<Createanaccount  showAlert={() => showAlert('Accepting Applications for Next Cohort Starting on 11th September. Apply Now.', 'success')}/>} />
       
<Route exact path="/FAQS" element={<FAQS  showAlert={() => showAlert('Login page open is sucessfully', 'success')}/>} />
<Route exact path ='/KNOWLEDGE PARTINERS' element={<KNOWLEDGEPARTINERS  showAlert={() => showAlert('Login page open is sucessfully', 'success')}/>}/>
<Route exact path='/UNIVERSTY ALLIANCES' element={<UNIVERSTYALLIANCES  showAlert={() => showAlert('Login page open is sucessfully', 'success')}/>}/>
<Route exact path='/TESTIMONIALS' element={<TESTIMONIALS  showAlert={() => showAlert('Login page open is sucessfully', 'success')}/>} />
<Route exact path='/TECH LAUNCHPAD' element={<TECHLAUNCHPAD  showAlert={() => showAlert('Login page open is sucessfully', 'success')}/>}/>
<Route exact path='/DATA SCIENCES' element={<DATASCIENCES  showAlert={() => showAlert('Login page open is sucessfully', 'success')}/>}/>
<Route exact path='/CYBER SECURITY' element={<CYBERSECURITY showAlert={() => showAlert('Login page open is sucessfully', 'success')}/>}/>
<Route exact path='/WEB DEVELOPMENT' element={<WEBDEVELOPMENT showAlert={() => showAlert('Login page open is sucessfully', 'success')}/>}/>
<Route exact path='/SOFT SKILLS' element={<SOFTSKILLS showAlert={() => showAlert('Login page open is sucessfully', 'success')}/>}/>
<Route exact path='/CONTACT US'element={<CONTACTUS showAlert={() => showAlert('Login page open is sucessfully', 'success')}/>}/>
      </Routes>
     
    </Router>
    
  );
}

export default App;
