import React,{useState,useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {API_KEY,Originals,ActionMovies,RomanceMovies,Documentaries} from './components/Constants'


function App() {

  const [movieList, setMovieList] = useState();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(data => setMovieList(data.results))
  }, [])


  return (
    <div className='App'>
      <NavBar/>
      {movieList && 
      <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} centerMode={false} showThumbs={false}>
         <Banner movie={movieList[0]}/>
         <Banner movie={movieList[1]}/>
         <Banner movie={movieList[2]}/>
         <Banner movie={movieList[3]}/>
         <Banner movie={movieList[10]}/>
      </Carousel>
      }
      <RowPost title='NetFlix Originals' url={Originals} isTrue/>
      <RowPost title='ActionMovies' url={ActionMovies}/>
      <RowPost title='RomanceMovies' url={RomanceMovies}/>
      <RowPost title='Documentaries' url={Documentaries}/>
    </div>
  )
}

export default App;
