import { useSelector } from "react-redux"
import SearchItems from "../SearchItems/SearchItems"



function SearchList () {

    const gifList = useSelector(store => store.searchReducer)
    console.log('the gif list is', gifList.data)


    return(
        <>
        <h2>Here is the search list...</h2>
            <ul>
                {gifList.data && gifList.data.map(gif => (
                   <SearchItems key = {gif.id} gif = {gif}/>
                ))}
            </ul>
            
        </>
    )
}


export default SearchList