import React, {useEffect, useState} from 'react';
import { fetchRequest } from '../services/apiRequest';

const QuotesContainer = () => {
    const [character, setCharacter] = useState('');

    useEffect(() => {
        fetchRequest();
    })

    return(
        <h1>ALL QUOTES WILL GO HERE</h1>
    )
}





export default QuotesContainer;