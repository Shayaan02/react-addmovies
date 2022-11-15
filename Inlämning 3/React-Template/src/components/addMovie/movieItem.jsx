import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
const MovieItem = (value) => {
    const [movieItem, setMovieItem] = useState([])
    const location= useLocation()
    useEffect(() => {
        if(location.state) {
            setMovieItem((movieItem) =>[ ...movieItem, location.state.movieName])
           
        }
    },[location.state] )
return(
    <div>
   {movieItem.map((value) => {
       return (
           <div className="div-container">
           <h2 className="name"> {value.movieName}</h2>
           <h2 className="name"> {value.subTitle}</h2>
           <h2 className="name"> {value.movieDescription}</h2>
           </div>
       )
   })}
    </div>
)
}


export default MovieItem