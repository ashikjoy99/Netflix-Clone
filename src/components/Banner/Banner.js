import './Banner.css';
import {Image_Url} from '../Constants';

function Banner({movie}) {
    return (
        <div className='banner' style={{backgroundImage:`url(${ Image_Url+movie.backdrop_path })`}}>
            <div className='content'>
                <h1 className='title'>{movie.title}</h1>
                <div className='banner-buttons'>
                    <button className='buttons'>Play</button>
                    <button className='buttons'>My List</button>
                </div>
                <h1 className='description'>{movie.overview}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner;
