import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'


import FavoritesItems from "../FavoritesItems/FavoritesItems"

function FavoriteList () {
    const dispatch = useDispatch()
    const history = useHistory();
    const favList = useSelector(store => store.favReducer)
    console.log('fav list is', favList)
    // const [favorite, setFavorite] = useSelector(store => store.favReducer)

    useEffect(() => {
        dispatch({
            type: 'FETCH_FAVS'
        })
    }, [])


    const homePage = () => {
        history.push('/')
    }

    return (
        <>
            <h2>Here is the favorites list...</h2>
            {favList.map(fav => (
                <FavoritesItems fav = {fav}/>
            ))}
            
            <button onClick = {homePage}>Back to Homepage</button>
            
        </>
    )
}


export default FavoriteList


