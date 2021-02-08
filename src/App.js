import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb';
import MovieRow from '../src/components/MovieRow'
import './App.css'

const App = () => {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const loadAll = async () => {

      // pegando a lista total
      let list = await Tmdb.getHomeList()
      setMovieList(list)
    }
    loadAll();
  }, [])


  return (
    <div className="page">
      <section className="lists">
       {movieList.map((item,Key)=> (
       
          <MovieRow key={Key} title={item.title} items={item.items}/>
         
       ))}
      </section>
    </div>
  )
}

export default App