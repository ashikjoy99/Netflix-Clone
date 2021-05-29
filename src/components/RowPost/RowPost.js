import React, { useState,useEffect } from 'react';
import './RowPost.css';
import{Image_Url} from '../Constants';
import YouTube from 'react-youtube';

const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 0,
      },
    };


function RowPost({title,url,isTrue}) {
    const [movie, setMovie] = useState([])
    const [movieId, setMovieId] = useState('')
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setMovie(data.results))
    },)

    const clickHandler = (id) =>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=9f7d8d5609ad645f8fcad5e6bc148a4d&language=en-US`)
        .then(response => response.json())
        .then(data => setMovieId(data.results[0].key))
        .catch(err => console.log( err,'video not available'))
    }

    const closeWindow =()=>{
        setMovieId('')
    }

    const errorFunction = () =>{
    console.log('youtube not responding')
    setMovieId('')
    }
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="posters">
               {movie&&
               movie.map((item,index)=>{
                   return(
                    <img onClick={()=>clickHandler(item.id)} key={index} className= { isTrue ?`poster`: `small-poster`} src={`${Image_Url}${item.backdrop_path}`} alt="poster" />
                   )
               }) 
               }  
            </div>  
        { movieId && <YouTube videoId={movieId} opts={opts} onError={errorFunction}  onPause={closeWindow}/>  }
        </div>
    )
}

export default RowPost;
