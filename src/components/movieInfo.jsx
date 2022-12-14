function MovieInfo(props) {
 
    return (
    <div className="infoMovie" >
        <div className="divInfoMovie">
            <h2>{props.name.Title}</h2>
            <h3>{props.name.Year}</h3>
            <h3>{props.name.Type}</h3>
            <img src={props.name.Poster} alt={props.name.Poster} className="images"/>
            <span className="closeBtn" onClick={()=> props.setTest()}><i className="bi bi-x-circle"></i></span>
        </div>
       
     </div>
     )
}

export default MovieInfo;