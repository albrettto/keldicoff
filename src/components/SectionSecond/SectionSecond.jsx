import React from 'react'
import cl from './SectionSecond.module.css'
import CoffeeBeans from '../../images/coffee-beans.png'

const SectionSecond = () => {


  return (
    <section class={cl.secondSect}>
    <img class={cl.coffeeBeans} src={CoffeeBeans} alt=""/>
    <p class={cl.titleSecondSect}>НАЙТИ KELDICOFF<br/>ПРОЩЕ ПРОСТОГО</p>
    <a href="about"><button class={cl.btnSecondSect}>Получить маршрут</button></a>
    
  </section>
  )
}

export default SectionSecond