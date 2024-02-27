import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDetailsFilms} from '../services/hooks/useDetailFilm'

 const FilmDetail = () => {
  
  const params = useParams();
  const param = params.id
  const film = useDetailsFilms(param)
  

  console.log("llega")
  console.log(film)
  
  
  return (
    <div>
     {
      <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="" />
      }

      <Link to={'/'}>
      <button className="btn btn-danger col-12">Volver</button>
  </Link>
      </div>
     
  )

}
export default FilmDetail
