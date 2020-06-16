import React from 'react'

const Poster = props =>{
    let posterUrl = "https://image.tmdb.org/t/p/w780/" + props.posterUrl.poster_path
    return (
    <img src={posterUrl} alt="" />
    )
}
export default Poster