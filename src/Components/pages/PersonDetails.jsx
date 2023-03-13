import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import "../../styles/PersonDetails.css"
import {fetchPersonDetails} from '../../redux/actions'
import LoadingSpinner from '../layout/LoadingSpinner'
function PersonDetails() {
    const [loading , setLoading]  = useState(false)
    const REACT_APP_TMDB_KEY = "4a16a312cc25534aac7bab9f0901fa3b";
    const PersonDetails = useSelector((state) => state.PersonDetails)
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        setLoading(true)
        axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${REACT_APP_TMDB_KEY}&language=en-US`)
        .then((res) => {
           dispatch(fetchPersonDetails(res.data)) 
        }).then((res) => {
            setLoading(false)
        })
    },[])
    console.log(PersonDetails)
    
    
  return (
    <div className='persons-details-container'>
    {!loading ? <>  
     {PersonDetails.map((e) => {
        return(
            <div className='person-container'>
                <div className='img-container'>
          <img src={`https://image.tmdb.org/t/p/w400/${e.profile_path}`} alt="" />
                </div>
                
                <div className='details-container'>
               <h3>{e.name}</h3> 
               <div>
                 <span className='title'>Birthday:</span>
                 <span>{e.birthday}</span>
               </div>
               <div>
                 <span className='title'>Place of birth:</span>
                 <span>{e.place_of_birth}</span>
               </div>
               <div>
                 <span className='title'>Biography:</span>
                 <span>{e.biography
}</span>
               </div>
                </div>
            </div>
        )
    })}</>
     
    :
     <LoadingSpinner/>}
    
    </div>
  )
}

export default PersonDetails