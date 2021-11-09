import React from "react";
import PropTypes from 'prop-types';
import { QuoteDiv } from "./QuoteStyles";

export default function Quote({quoteTextOnly}){
    return(
        <QuoteDiv>
            <p>{quoteTextOnly}</p>
        </QuoteDiv>
    )
}

Quote.propTypes = {
    quoteTextOnly: PropTypes.string.isRequired
}