/* eslint-disable indent */
import { useCallback, useRef, useState } from 'react'
import './App.css'
import { Movies } from './components/listOfMovies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App() {
  const { error, search, setSearch } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies, loading } = useMovies({ search, sort })
  const inputRef = useRef()

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 500), [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(event.target.value)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>

        <h1>Buscador de películas:</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input value={search} onChange={handleChange} name='query' ref={inputRef} placeholder='Avengers, Matrix, Balto' />

          <input type='checkbox' onChange={handleSort} />

          <button type='submit'> Buscar </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>loading...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
