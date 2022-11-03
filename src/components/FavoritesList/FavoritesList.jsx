import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import FavoritesItems from "../FavoritesItems/FavoritesItems"

function FavoriteList () {
    const dispatch = useDispatch()
    // const [favorite, setFavorite] = useSelector(store => store.favReducer)

    useEffect(() => {
        dispatch({
            type: 'FETCH_FAVS'
        })
    }, [])

    return (
        <>
            <h2>Here is the favorites list...</h2>
            <FavoritesItems />
        </>
    )
}


export default FavoriteList


