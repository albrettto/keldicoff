import React from 'react';
import FirstSection from '../components/FirstSection/FirstSection';
import MyLocation from '../components/MyLocation/MyLocation';
import MyFeedback from '../components/MyFeedback/MyFeedback';
import MyFooter from '../components/MyFooter/MyFooter';
import MyHeader from '../components/MyHeader/MyHeader';


function About() {
  return (
    <div>
      <MyHeader/>
      <FirstSection/>
      <MyLocation/>
      <MyFeedback/>
      <MyFooter/>
    </div>
  );
}

export default About;
