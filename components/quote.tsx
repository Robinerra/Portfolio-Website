import React from 'react'

function quote(props: any) {
    interface props {
        quote: string,
        cite: string
    }
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