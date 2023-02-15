import React from 'react'
import cl from './FirstSection.module.css'
import CoffeeBob from '../../images/coffeeBob.png'
import ArrowDown from '../../images/arrowDown.svg'


const FirstSection = () => {
  return (
    <div>
        <p className={cl.title}>Будем на связи ;)</p>
        <p className={cl.text}>Пей вкусно. Пей горячо.</p>
        <p className={cl.text}>Keldicoff.</p>
        <a href="#geoLoc"><img className={cl.arrowDown} src={ArrowDown}/></a>
        <img className={cl.coffeeBob} src={CoffeeBob}/>
    </div>
  )
}

export default FirstSection