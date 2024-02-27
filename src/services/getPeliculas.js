
export const getAllFilms = async()=> {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=662af20196401da644ea83b5b77edda3&append_to_response=videos,images`)
    const films = response.json()

    return films.results

}