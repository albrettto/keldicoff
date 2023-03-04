import React, { useState, useEffect, useRef } from 'react'
import cl from './SectionFirst.module.css'
import Texture from '../../images/texture.png'
import CoffeeCup from '../../images/coffeeCup.png'

const SectionFirst = () => {
  const pictureRef = useRef(null);
  const [checks, setChecks] = useState(false);

  useEffect(() => {
    const picture = pictureRef.current;
    setChecks(true);

    const handleScroll = () => {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      if (checks) {
        setTimeout(() => {
          picture.style.top = `${scrolled / 20}px`;
        }, 300);
        console.log(picture.style.top)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [checks]);

  return (
    <section className={cl.firstSect}>
      <img className={cl.texture} src={Texture} alt=""/>
      <p className={cl.titleFirstSect}>KELDICOFF МЕНЮ</p>
      <p className={cl.textFirstSect}>Выбор прост, когда это настоящий кофе.<br/>
        Пейте вкусно. Пейте с наслаждением.</p>
      <a href="menu"><button className={cl.btnFirstSect}>Посмотреть меню</button></a>
      <img className={cl.picture} src={CoffeeCup} ref={pictureRef} alt=""/>
    </section>
  )
}

export default SectionFirst