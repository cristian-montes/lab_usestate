import React from "react";
import Quote from './Quote';
import PropTypes from 'prop-types';
import { List, Divv } from './QuotesListStyles';

export default function QuoteList({results, loading}){

    const quoteList = results.map(({id, quoteTextOnly}) => (
        <li key={id}>
            <Quote quoteTextOnly={quoteTextOnly}/>
        </li>
    ))

    return(
        <Divv>
            {loading ? (<h1>Loading..</h1>)
                :(
            <div>
                <List aria-label="quotes" >{quoteList}</List>
            </div>
            )}
        </Divv>
        );

}


QuoteList.propTypes ={
    results: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            quoteList: PropTypes.array.isRequired
        })
    )
}
