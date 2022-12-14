import  {getMovieServeies} from "../services/MoviesServies";
import { useEffect,useState } from "react";
import MoviesNameList from "../MoviesNameList";
import MovieInfo from "../movieInfo";



function GetMoviesName(props) {
    const [movies,setMovies] = useState([]);
    const [test,setTest] = useState();

    function restart() {
        setTest()
    }
    
    useEffect(()=>{
        const getMovie = async()=>{
            const{data}= await getMovieServeies(props.name);
            setMovies(data.Search)
        };
       
        getMovie()
          
    },[props.name]) 

    if (test && movies) {
        return(<>
                <MovieInfo name={test} setTest={()=>restart()}/>
                <MoviesNameList movies={movies} test={test} setTest={setTest}/> 
            </> ) 
    }
    if (movies) {
        return <MoviesNameList movies={movies} test={test} setTest={setTest}/>
    }
    else{
         return
    }
   
 
}

export default GetMoviesName;