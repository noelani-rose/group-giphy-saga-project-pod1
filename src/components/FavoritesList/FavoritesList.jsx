import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'


import FavoritesItems from "../FavoritesItems/FavoritesItems"

function FavoriteList () {
    const dispatch = useDispatch()
    const history = useHistory();
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
            <FavoritesItems />
            <button onClick = {homePage}>Back to Homepage</button>
            
        </>
    )
}


export default FavoriteList


