import React from 'react'
import '../styles/Person.css'
import { useNavigate } from 'react-router-dom'
function Person({person}) {
    const navigate = useNavigate()
    const {profile_path,character,name,id} = person
    const navigatetoPersonDetails = (id) => {
      navigate(`/person/${id}`)
    }
  return (
    <div className='person' key={id}>
       <img onClick={() => navigatetoPersonDetails(id)} src={`https://image.tmdb.org/t/p/w400/${profile_path}`} alt="" />
       <div>
        <span className='name'>{name}</span>
        <br />
       <span>{character}</span>
       </div>
       
    </div>
  )
}

export default Person