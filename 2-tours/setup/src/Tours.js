import React from 'react'
import Tour from './Tour'
const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <div className='title'>
        <h2>Tours Provided</h2>
        <div className='underline'></div>
      </div>
      <section>
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} removeTour={removeTour}></Tour>
        })}
      </section>
    </>
  )
}

export default Tours
