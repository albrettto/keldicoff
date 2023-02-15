import React from 'react'
import cl from './MyFeedback.module.css'

const MyFeedback = () => {
  return (
    <div>
        <p className={cl.weAre}>ОБРАТНАЯ СВЯЗЬ</p>
        <div className={cl.line}></div>
        <div className={cl.mailDiv}>
            <p className={cl.mail}>НЕ БОЙТЕСЬ ОСТАВЛЯТЬ ТУТ ВАШИ КОММЕНТАРИИ:</p>
            <a className={cl.mailLink} href="mailto:KELDICOFFFB@GMAIL.COM">KELDICOFFFB@GMAIL.COM</a>
        </div>
    </div>
  )
}

export default MyFeedback