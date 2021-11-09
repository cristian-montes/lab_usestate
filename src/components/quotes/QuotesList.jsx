import React from "react";
import Quote from './Quote';
import PropTypes from 'prop-types';

export default function QuoteList({results, loading}){

    const quoteList = results.map(({id, quoteTextOnly}) => (
        <li key={id}>
            <Quote quoteTextOnly={quoteTextOnly}/>
        </li>
    ))



    return(
        <div>
            {loading ? (<h1>Loading..</h1>)
                :(
            <div>
                <ul aria-label="quotes">{quoteList}</ul>
            </div>
            )}
        </div>
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
