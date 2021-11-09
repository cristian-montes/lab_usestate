import React, {useState} from 'react';
import Controls from '../components/controls/Controls';
import QuoteList from '../components/quotes/QuotesList';
import { fetchRequest } from '../services/apiRequest';

const QuotesContainer = () => {
    const [character, setCharacter] = useState('');
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)


    const handleChange = (event) =>{
        setCharacter(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const response = await fetchRequest(character);

        setResults(response);
        setLoading(false);
       
    }



    let resultList = null;
    if(results.length === 0) {
        resultList = <div>No images found</div>
    } else { 
        resultList = <QuoteList loading={loading} results={results}/>
    }

    return(

        <>
            <Controls
                character = {character}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            {resultList}
        </>
    )
}





export default QuotesContainer;