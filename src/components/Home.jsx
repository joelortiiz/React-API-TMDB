import React from 'react'
import CardFilm from './CardFilm'
import useFilm from '../services/hooks/useFilm'


const Home = () => {

    const films = useFilm();
  return (
    <div>
    
    { films ? films.map( film => (
        <CardFilm key={film.id} film={film}/>
        
    )
    ) : <p>...Cargando...</p>
        
    }

    </div>
  )
}

export default Home