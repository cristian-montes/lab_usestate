import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({handleChange,character, handleSubmit}) => {
   return( 
   <form onSubmit = {handleSubmit}>
        
        <label htmlFor='characters'>you favorite character</label>
        <input
            type="text"
            value={character}
            onChange ={handleChange}
        />
        <button aria-label="get-quotes"> Get Quotes</button>
    </form>
   )
}

Controls.propTypes = {
    handleChange: PropTypes.func.isRequired,
    character: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired
}




export default Controls;