import React, {useEffect, useState} from 'react';
import Controls from '../components/controls/Controls';
import { fetchRequest } from '../services/apiRequest';

const QuotesContainer = () => {
    const [character, setCharacter] = useState('');
    const [results, setResults] = useState('')

    // useEffect(() => {
    //     fetchRequest();
    // })

    const handleChange = (event) =>{
        setCharacter(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetchRequest(character);
        console.log('response', response);
        setResults(response);
    }




    return(
        <Controls
            character = {character}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    )
}





export default QuotesContainer;