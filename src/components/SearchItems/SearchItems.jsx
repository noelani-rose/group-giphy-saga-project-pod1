import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';


function SearchItems ({gif}) {
    const label = { inputProps: { 'aria-label' : 'Checkbox demo' } }
    console.log('the gif from search list is', gif)
    return (
        <>
        <img src = {gif.images.downsized.url} />
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      {/* <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />} */}
      {/* /> */}
        </>
        
    )
}


export default SearchItems