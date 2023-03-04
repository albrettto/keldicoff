import React,{useEffect, useState} from 'react';
import FirstSection from '../components/FirstSection/FirstSection';
import MyLocation from '../components/MyLocation/MyLocation';
import MyFeedback from '../components/MyFeedback/MyFeedback';
import MyFooter from '../components/MyFooter/MyFooter';
import MyHeader from '../components/MyHeader/MyHeader';
import "../App.css"

function Script(props) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = props.src;
    script.async = true;
    document.getElementById(props.id).appendChild(script);

    return () => {
      document.getElementById(props.id).removeChild(script);
    }
  }, [props.src, props.id]);

  return <div id={props.id} className={props.id}></div>;
}

function About() {
  const url = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A759bdb48082f54694da540d842105df827f0ff5508ed3f42ef46f70bad24b3d7&amp;width=100%&amp;height=600&amp;lang=ru_RU&amp;scroll=true";

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.screenY;
    setScrollY(scrollPosition);
    console.log(scrollY)
  };  
  


  return (
    <div  className='App' onScroll={handleScroll}>
      <div className='texture'>
        <MyHeader/>
        <FirstSection/>
      </div>
      <Script id="map" src={url}/>
      <MyLocation/>
      <MyFeedback/>
      <MyFooter/>
    </div>
  );
}

export default About;
