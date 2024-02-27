import { useEffect, useState } from "react";
import { getAllFilms} from '../getPeliculas';

 const useFilm =()=> {

    const [film, setFilm] = useState();

    const loadFilms = async()=> {
        const data = await getAllFilms()
        setFilm(data);
    }

    useEffect(()=> {
        loadFilms();
    }, [])


    return film

}

export default useFilm
