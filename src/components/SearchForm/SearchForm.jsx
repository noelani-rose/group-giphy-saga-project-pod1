import React, { useState }from "react"
import { useDispatch } from 'react-redux';

function SearchForm() {

    const dispatch = useDispatch();

    let [searchInput, setSearchInput] = useState('')

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setSearchInput(event.target.value)
    }
    
    const searchGiphy = (event) => {
        event.preventDefault();
        console.log('searching for...', searchInput)

        dispatch({
            type: '',
            payload: searchInput
        })
    }

    return (
        <form onSubmit={searchGiphy}>
            <h2>What are you looking for?</h2>
            <input 
                placeholder='dinosaur'
                onChange={handleInputChange}/>
            <button 
                    type='submit'>
                   Fetch me my gif!
            </button>
        </form>
    )

}

export default SearchForm;