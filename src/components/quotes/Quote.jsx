import React from "react";
import PropTypes from 'prop-types';

export default function Quote({quoteTextOnly}){
    return(
        <figure>
            <p>{quoteTextOnly}</p>
        </figure>
    )
}

Quote.propTypes = {
    quoteTextOnly: PropTypes.string.isRequired
}