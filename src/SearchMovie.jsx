import React, { useState } from 'react'
import Movies from './Movies'

export default function SearchMovie() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {
    e.preventDefault()
    console.log("submitting")
    const url = `https://api.themoviedb.org/3/search/movie?api_key=c1b971c96d86032775fa6707e4286d30&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.results)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <form className='form' onSubmit={searchMovies}>
        <label className='label' htmlFor="query">Movie Name</label>
        <input className='input'
          type='text'
          name='query'
          placeholder='i.e. Jurassic Parck'
          value={query} onChange={(e) => setQuery(e.target.value)}
        >
        </input>
        <button className='button' type='submit'>Search</button>
      </form>
      <div className='card-list'>
        <Movies movies={movies}/>
      </div>
    </div>
  )
}
