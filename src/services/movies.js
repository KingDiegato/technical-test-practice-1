const API_KEY = import.meta.VITE_API_KEY
const API_URL = 'http://www.omdbapi.com/'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const res = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`)
    const json = await res.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
      type: movie.Type
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
