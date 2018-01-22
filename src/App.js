import React, { Component } from 'react';
//import logo from './logo.svg';
//import mainImage from './mainImage';
import './App.css';
import {MainImage} from "./MainImage.js";
import {Past} from './Past';
import IOI2013_logo from './assets/IOI2013-logo.png';
import IOI2014_logo from './assets/IOI2014-logo.png';
import YHack_logo from './assets/YHack.png';
import Ynot_logo from './assets/Ynot-logo.png';
import Uwaterloo_logo from './assets/Uwaterloo_logo.jpg';
import Boun_logo from './assets/Boun_logo.jpg';
import Mentalist_logo from './assets/Mentalist-logo.jpeg';
import Starleague_logo from './assets/Starleague-logo.jpg';
import Linkedin_logo from './assets/linkedin-logo.jpg';
import Facebook_logo from './assets/facebook-logo.png';
import Quora_logo from './assets/quora-logo.jpeg';
import Codeforces_logo from './assets/codeforces-logo.png';

const imgSource1 = IOI2013_logo;
const heading1 = "The 25th International Olympiad in Informatics";
const headingLink1 = "http://www.ioinformatics.org/locations/ioi13/";
const desc1 = "Won Silver Medal, July 2013";
const location1 = "Brisbane, Australia";

const imgSource2 = IOI2014_logo;
const heading2 = "The 26th International Olympiad in Informatics";
const headingLink2 = "http://www.ioinformatics.org/locations/ioi14/";
const desc2 = "Won Silver Medal, July 2014";
const location2 = "Taipei, Taiwan";

const imgSource3 = YHack_logo;
const heading3 = "YHack 2015";
const headingLink3 = "https://yhack2015.devpost.com/";
const desc3 = "Developed 4K Public Canvas, November 2015";
const location3 = "Yale University, New Haven, CT, United States";

const imgSource4 = Ynot_logo;
const heading4 = "YNOT Partners";
const headingLink4 = "https://ynotpartners.com/";
const desc4 = "Frontend Web Developer Intern, Summer 2017";
const location4 = "Istanbul, Turkey";

const imgSource5 = Uwaterloo_logo;
const heading5 = "University of Waterloo";
const headingLink5 = "https://uwaterloo.ca/";
const desc5 = "Computer Science, September 2015";
const location5 = "Waterloo, ON, Canada";

const imgSource6 = Boun_logo;
const heading6 = "Bogazici University";
const headingLink6 = "http://www.boun.edu.tr/en_US";
const desc6 = "Computer Engineering, September 2016";
const location6 = "Istanbul, Turkey";

const imgSource7 = Mentalist_logo;
const heading7 = "Mentalist Event Marketing";
const headingLink7 = "https://www.linkedin.com/company/mentalist-event-&-marketing/";
const desc7 = "Digital Marketing Intern, Summer 2017";
const location7 = "Istanbul, Turkey";

const imgSource8 = Starleague_logo;
const heading8 = "Star League";
const headingLink8 = "https://starleague.us/";
const desc8 = "USACO Platinum Class Instructor, December 2015";
const location8 = "Santa Clara, CA, United States";

class App extends Component {
  render() {
    return (
        <div className="App">
            <MainImage />
            <div className="container-fluid" style={{backgroundColor: "white", paddingTop: "5%"}} >
                <h2 style={{color: "black", fontSize: "135%"}}>
                    <strong>Here's what I've done so far</strong>
                </h2>
                <Past heading={heading1} desc={desc1} location={location1} imgSource={imgSource1}
                      headingLink={headingLink1}/>
                <Past heading={heading2} desc={desc2} location={location2} imgSource={imgSource2}
                      headingLink={headingLink2}/>
                <Past heading={heading5} desc={desc5} location={location5} imgSource={imgSource5}
                      headingLink={headingLink5}/>
                <Past heading={heading3} desc={desc3} location={location3} imgSource={imgSource3}
                      headingLink={headingLink3}/>
                <Past heading={heading8} desc={desc8} location={location8} imgSource={imgSource8}
                      headingLink={headingLink8}/>
                <Past heading={heading6} desc={desc6} location={location6} imgSource={imgSource6}
                      headingLink={headingLink6}/>
                <Past heading={heading4} desc={desc4} location={location4} imgSource={imgSource4}
                      headingLink={headingLink4}/>
                <Past heading={heading7} desc={desc7} location={location7} imgSource={imgSource7}
                      headingLink={headingLink7}/>
            </div>
            <div className="container-fluid" style={{ paddingBottom: "200px", paddingTop: "50px", backgroundColor: "#F5F5F5"}}>
                <h2 style={{color: "black", fontSize: "140%", marginBottom: "50px"}}>
                    <strong>Let's get in touch</strong>
                </h2>
                <div className="row align-middle">
                    <div className="col-md-2"></div>
                    <a className="col-md-2"
                       target="_blank"
                       href="https://www.linkedin.com/in/semih-basr%C4%B1k-315158bb/">
                        <img style={{width: "150px", height: "150px"}} src={Linkedin_logo}/>
                    </a>
                    <a className="col-md-2"
                       target="_blank"
                       href="https://www.quora.com/profile/Semih-Basr%C4%B1k/">
                        <img style={{width: "150px", height: "150px"}} src={Quora_logo}/>
                    </a>
                    <a className="col-md-2"
                       target="_blank"
                       href="http://codeforces.com/profile/sbasrik/">
                        <img style={{width: "150px", height: "150px"}} src={Codeforces_logo}/>
                    </a>
                    <a className="col-md-2"
                       target="_blank"
                       href="https://www.facebook.com/sbasrik">
                        <img style={{width: "150px", height: "150px"}} src={Facebook_logo}/>
                    </a>
                    <div className="col-md-2"></div>

                </div>
            </div>
        </div>
    );

     /* (

      <div className="App">

        <header className="App-header">

            <mainImage/>
          <h1 className="App-title">Hey, I'm Semih.</h1>
        </header>
      </div>
    );*/
  }
}

export default App;
