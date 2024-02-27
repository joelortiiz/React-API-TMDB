
import { useEffect, useState } from 'react'
import getPeliculaID from '../getPeliculaID'


export const useDetailsFilms = (param)=> {

    const [pelicula, setPelicula] = useState({})

  const loadPelicula = async ()=> {
    const peli = await getPeliculaID(param)
    setPelicula(peli)
   }

   useEffect(()=> {
    loadPelicula();
   }, [param])

   return pelicula
}

