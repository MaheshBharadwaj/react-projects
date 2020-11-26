import React from 'react'

const List = (props) => {
  const people = props.data
  return (
    <>
      {people.map((person) => {
        return (
          <div key={person.id} className='person'>
            <img src={person.image} alt='' />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default List
