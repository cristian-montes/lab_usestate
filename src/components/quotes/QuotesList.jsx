import React from "react";
import Quote from './Quote';
export default function QuoteList({results}){

    const quoteList = results.map(({id, quoteTextOnly}) => (
        <li key={id}>
            <Quote quoteTextOnly={quoteTextOnly}/>
        </li>
    ))



    return(
        <ul aria-label="quotes">{quoteList}</ul>
        )
}