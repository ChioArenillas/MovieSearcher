import React from 'react'

export default function Movies({ movies }) {
    const moviesEl = movies
        .filter(movie => movie.poster_path)
        .map(movie => (
            <div className='card' key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title + ' poster'} />
                <div className='card-content'>
                    <h1>{movie.original_title}</h1>
                    <p><small>RELEASE DATE: {movie.release_date}</small></p>
                    <p className='card-description'>{movie.overview}</p>
                </div>
            </div>
        ))

    return (
        <>
        {moviesEl}
        </>
    )
}
