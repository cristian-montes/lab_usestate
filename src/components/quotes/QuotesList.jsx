import React from "react";
import Quote from './Quote';
import PropTypes from 'prop-types';

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

QuoteList.propTypes ={
    results: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            quoteList: PropTypes.array.isRequired
        })
    )
}
