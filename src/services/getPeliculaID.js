export const getOneFilm = async (id) => {
    console.log(id)
    const result = await fetch(`https://api.themoviedb.org/3/movie/${id}?&api_key=662af20196401da644ea83b5b77edda3`);
    const film = await result.json();
    return film;
};
export default getOneFilm

