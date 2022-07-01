//Copyright Elise Willar 2022 for elisewillar.com
//1st of July 2022
import React from 'react'
import style from "../styles/components/quote.module.css"


function quote(props: any) {
    interface props {
        quote: string,
        cite: string
    }

  //&ldquo; for opening smartquotes and &rdquo; for closing smartqoutes 
  //Doesn't work on all fonts but my secondary font does work.
  //  https://smartquotesforsmartpeople.com/
  return (
    <div>
        <p className={style.quote}>
            <span  className={[style.openingMark, style.mark].join(' ')}>&ldquo;</span>
            <span className={style.text}>{props.quote}</span>
            <span className={[style.closingMark, style.mark].join(' ')}>&rdquo;</span><br/>
            <span className={style.citation}>{props.cite}</span>
        </p>
    </div>
  )
}

export default quote