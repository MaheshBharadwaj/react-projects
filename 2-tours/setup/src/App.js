import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const [error, setError] = useState(false)
  const [empty, setEmpty] = useState(false)

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id)
    setTours(newTour)
    if (newTour.length === 0) setEmpty(true)
  }

  const fetchData = async () => {
    try {
      const resp = await fetch(url)
      if (!(resp.status > 199 && resp.status < 300)) {
        setError(true)
      }
      const toursJSON = await resp.json()
      setTours(toursJSON)
      setLoading(false)
      setEmpty(false)
    } catch (error) {
      setLoading(false)
      setError(true)
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (error) {
    return (
      <main>
        <h1>Error Loading Data</h1>
      </main>
    )
  }
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (empty) {
    return (
      <main>
        <h1 className='title'>No tours to Display</h1>
        <button className='btn title' onClick={fetchData}>
          Refresh
        </button>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
