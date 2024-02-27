import { Link } from 'react-router-dom'

export const CardFilm = ({film}) => {
  return (
    <>
    
    <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}/>
    <div>
        <h3>
           {film.title} 
        </h3>
        <p>
            {film.relase_date}
        </p>
    </div>
    <Link to={`/films/${film.id}`}>
    Detalles
    </Link>
    
    </>
  )
}

export default CardFilm