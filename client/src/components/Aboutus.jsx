import './Aboutus.css'
import katie from '../assets/images/Katie.jpg';
import roberto from '../assets/images/Roberto Garcia.jpg';
import michael from '../assets/images/mikes.jpg';
import matthew from '../assets/images/Matthew.jpg';
import React from 'react';

const Aboutus = () => {
    return(
        <>
        <div class="about-section">
        <h1>About Us Page</h1>
        <p>Here is the Wyncode 37 team that has brought you "The Market".</p>
        <p></p>
        </div>
        
        <h2 style={{textAlign:"center"}}>Our Team</h2>
        <div class="row">
        <div class="col">
          <div class="card">
            <img src={katie} alt="Katie" style={{width:"80%"}} />
            <div class="container">
              <h2>Katie Breuil</h2>
              <p class="title">Full-Stack Developer, Concept & Design Wyncode Cohort 37</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>katie@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>
        
        <div class="col">
          <div class="card">
            <img src={roberto} alt="Roberto" style={{width:"80%"}}/>
            <div class="container">
              <h2>Robert Garcia</h2>
              <p class="title">Full-Stack Developer, Wyncode Cohort 37</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>robert@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>
        
        <div class="col">
          <div class="card">
            <img src={michael} alt="Michael" style={{width:"80%"}} />
            <div class="container">
              <h2>Michael Edgecombe</h2>
              <p class="title">Full-Stack Developer, Wyncode, Cohort 37</p>
              <p>Michael has returned to the Information Technology field after several years in the Medical field (The Ohio State University) and earning an MBA from Regis University. 
                 He has worked as a data analyst for NASA spinoffs, USAF Finance Center Denver,CO and University of Miami in (P.I.M.S.)-AKA Pesticide research for the State Legislature of Florida. 
                 Michael most recently updated his skillset with a tour of training through Wyncode Academy, for Full-Stack-Developer Miami, FL.</p>
              <p>305mpg@gmail.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>
        </div>
        
        <div class="column">
          <div class="card">
            <img src={matthew} alt="Mathew" style={{width:"100%"}} />
            <div class="container">
              <h2>Matthew De Moraes</h2>
              <p class="title">Full-Stack Developer, Wyncode, Cohort 37</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>
        
       </>
    )
}

export default Aboutus;