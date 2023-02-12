import React from 'react'

function ListOfMovies({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map(movies => (
          <li className='movie' key={movies.id}>
            <h3>{movies.title}</h3>
            <p>{movies.year}</p>
            <img src={movies.poster} alt={movies.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMovies() {
  return (
    <p> no hay peliculas encontradas en tu búsqueda</p>
  )
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMovies />
  )
}
