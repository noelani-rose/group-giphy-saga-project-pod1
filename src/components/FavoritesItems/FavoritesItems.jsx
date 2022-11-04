import { useState } from "react"

function FavoritesItems ({fav}) {

// const [category, setCategory] = useState('')


    // const onSetCategory = (evt) => {
    //     const category = evt.target.value 
    //     dispatch({
    //         type: 'SET_CAT', 
    //         payload: {
    //             favorite: fav.id
    //         }
    //     })
    // }

    return (
        <>
        <h3>Here are the favorites items...</h3>
        <img src = {fav.url}/>
        {/* <select value = {category} onChange ={onSetCategory}> */}
            {/* <option key = {cat.id} value = {cat.id}>Funny</option> */}
            <option></option>
            <option></option>
            <option></option>

        {/* </select> */}
        </>
    )
}
export default FavoritesItems