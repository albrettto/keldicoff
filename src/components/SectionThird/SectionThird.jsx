import React from 'react'
import cl from './SectionThird.module.css'
import Texture from '../../images/texture.png'
import Man from '../../images/man.png'

const SectionThird = () => {

  return (
    <section class={cl.thirdSect}>
      <img class={cl.texture} src={Texture} alt=""/>
      <p class={cl.titleThirdSect}>KELDICOFF - МЕСТО ДЛЯ ВСТРЕЧ</p>
      <p class={cl.textThirdSect}>Почувствуйте наш вайб.<br/>Будьте с нами! Будьте за нас.</p>
      <img class={cl.man} src={Man} alt=""/>
    </section>
  )
}

export default SectionThird