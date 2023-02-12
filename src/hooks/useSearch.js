import { useEffect, useRef, useState } from 'react'

export function useSearch() {
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }
    setError(null)
  }, [search])
  return { error, setSearch, search }
}
