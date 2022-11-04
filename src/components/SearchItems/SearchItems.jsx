import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';


function SearchItems ({gif}) {
    const label = { inputProps: { 'aria-label' : 'Checkbox demo' } }
    console.log('the gif from search list is', gif)
    const dispatch = useDispatch();
    const addFavorite = () => {
        console.log('in addfavorite function')
        dispatch({
            type: 'ADD_FAV',
            // this is what i want to send, right??
            payload: {
                url: gif.images.downsized.url
            }
        })
    }



    return (
        <>
        <img src = {gif.images.downsized.url} />
        <Checkbox onClick = {addFavorite} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      {/* <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />} */}
      {/* /> */}
        </>
        
    )
}


export default SearchItems