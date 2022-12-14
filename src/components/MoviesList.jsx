import AddToFavourit from "./AddToFavourit";

function MovieList(props) {
    
    return(
        <> 
         {props.movies.map((movie,index)=>(
                <div className='image-container d-flex justify-content-start m-3'  style={{alignItems:"center"}} key={index} >
                    <div className="d-flex " style={{flexDirection:"column" , alignItems:"center"}}>
                        <div> 
                             <h5 className="m-3 " id="MoviesTitels">{movie.Title}</h5>
                            <div onClick={()=>props.AddtoFavouritesMovie(movie)} className="overlay d-flex align-items-center justify-content-center">
                                <AddToFavourit add={"add to favourit"}/>
                            </div>
                        </div>
                             <img src={movie.Poster} alt="movie"  className="images"  onClick={()=> props.setTest(movie)}  />
                    </div>
                     
                </div>            
        ))}
        </>
       
    )

}

export default MovieList;