import React from 'react';
import MyFooter from '../components/MyFooter/MyFooter';
import MyHeader from '../components/MyHeader/MyHeader';
import "../App.css"
import Walp from '../images/walp.webm'
import VideoSection from '../components/VideoSection/VideoSection';
import SectionFirst from '../components/SectionFirst/SectionFirst';
import SectionSecond from '../components/SectionSecond/SectionSecond';
import SectionThird from '../components/SectionThird/SectionThird';


function About() {
  return (
    <div  className='App font'>
      <div className='wrapper'>
        <video id="bgvideo" className="bgvideo" poster="media/poster.jpg" autoPlay muted loop>
          <source src={Walp} type="video/webm"/>
        </video>
        <MyHeader/>
        <VideoSection/>
      </div>
      <SectionFirst/>
      <SectionSecond/>
      <SectionThird/>
      
      <MyFooter/>
    </div>
  );
}

export default About;
