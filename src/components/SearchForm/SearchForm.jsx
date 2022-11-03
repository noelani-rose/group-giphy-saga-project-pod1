import React, { useState }from "react"
import { useDispatch } from 'react-redux';

function SearchForm() {

    const dispatch = useDispatch();

    let [searchInput, setSearchInput] = useState('')

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setSearchInput(event.target.value)
    }
    searchGiphy = (input) => {
        console.log('searching for...', input)
    }

    return (
        <form onSubmit={() => {searchGiphy(input)}}>
            <h2>What are you looking for?</h2>
            <input placeholder='dinosaur'/>
            <button 
                    onChange={handleInputChange}
                    type='submit'>
                   Fetch me my gif!
            </button>
        </form>
    )

}

export default SearchForm;