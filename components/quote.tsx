//Copyright Elise Willar 2022 for elisewillar.com
//19th of June 2022
import React from 'react'

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
        <p className="quote">
            <span  className="quoteOpeningMark quoteMark">&ldquo;</span>
            <span className='quoteText'>{props.quote}</span>
            <span className="quoteClosingMark quoteMark">&rdquo;</span><br/>
            <span className='quoteCitation'>{props.cite}</span>
        </p>
    </div>
  )
}

export default quote