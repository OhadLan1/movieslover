import httpService from "./HttpMoviesServies";


export function getMovieServeies(name) {
    return httpService.get(`http://www.omdbapi.com/?s=${name}&apikey=cfaf86ed`);
}