import React from 'react';

const Controls = ({handleChange,character}) => {
   return( <form>
        
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

export default Controls;