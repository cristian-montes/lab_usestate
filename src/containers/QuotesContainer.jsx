import React, {useState} from 'react';
import Controls from '../components/controls/Controls';
import QuoteList from '../components/quotes/QuotesList';
import { fetchRequest } from '../services/apiRequest';

const QuotesContainer = () => {
    const [character, setCharacter] = useState('');
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     fetchRequest();
    // })

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




    return(
        <>
            <Controls
                character = {character}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <QuoteList
                loading={loading}
                results={results}
            />
        </>
    )
}





export default QuotesContainer;