import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


function SearchItems ({gif}) {
    console.log('the gif from search list is', gif)
    return (
        <>
        <h3>Here are the search items...</h3>
        <img src = {gif.url} />
        </>
        
    )
}


export default SearchItems