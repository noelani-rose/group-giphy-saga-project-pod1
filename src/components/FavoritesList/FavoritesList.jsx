import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'


import FavoritesItems from "../FavoritesItems/FavoritesItems"

function FavoriteList () {
    const dispatch = useDispatch()
    const history = useHistory();
    const favList = useSelector(store => store.favReducer)
    console.log('fav list is', favList)

    // useEffect(() => {
    //     dispatch({
    //         type: 'FETCH_FAVS'
    //     })
    // }, [])

    // this will go to watcher saga
    // const addCatFunny = (event) => {
    //     dispatch({
    //         type: 'ADD_CAT',
    //         payload: event
    //     })
    // }






    const homePage = () => {
        history.push('/')
    }

    return (
        <>
            <h2>Here is the favorites list...</h2>
            {favList.map(fav => (
                <FavoritesItems fav = {fav}/>
            ))}
            {/* DROP DOWN HERE */}
            {/* ON SELECT = {(event) => addCat('funny')} */}
            <button onClick = {homePage}>Back to Homepage</button>
            
        </>
    )
}


export default FavoriteList


