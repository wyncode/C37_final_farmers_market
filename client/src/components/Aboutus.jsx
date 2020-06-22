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
        <h1>About Us</h1>
        <p>Here is the Wyncode 37 team that has brought you "The Market".</p>
        <p></p>
        </div>
        
        <h2 style={{textAlign:"center"}}>Our Team</h2>

        <div className="card-container">
          <div class="card">
            <img src={katie} alt="Katie" />
            <div class="container">
              <h2>Katie Breuil</h2>
              <p class="title">Full-Stack Developer, Concept & Design Wyncode Cohort 37</p>
              <p> Katie is a Web Development student at Wyncode, who is excited to create
                  solutions to every day problems with technology.</p>
              <p>katie@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
            </div>
        
          <div class="card">
            <img src={roberto} alt="Roberto" />
            <div class="container">
              <h2>Roberto Garcia</h2>
              <p class="title">Full-Stack Developer, Wyncode Cohort 37</p>
              <p>Roberto is a Web Development student at Wyncode, who is excited to create
                  solutions to every day problems with technology.</p>
              <p>robert@example.com</p>
              <p><button class="button">Contact</button></p>
              </div>
          </div>
        
          <div class="card">
            <img src={michael} alt="Michael" />
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
            
              <div class="card">
            <img src={matthew} alt="Mathew"/>
            <div class="container">
              <h2>Matthew De Moraes</h2>
              <p class="title">Full-Stack Developer, Wyncode, Cohort 37</p>
              <p>Matthew is a Web Development student at Wyncode, who is excited to create
                  solutions to every day problems with technology.</p>
              <p>mdemoraes1999@gmail.com</p>
              <p><button class="button">Contact</button></p>
          </div>
          </div>
          </div>
        
       </>
    )
}

export default Aboutus;