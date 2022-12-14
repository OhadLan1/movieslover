import PageHeader from "./common/pageHeader";
 import GetMovies from "./hooks/getMovie";
 import { useState } from "react";
import GetMoviesName from "./hooks/getMovieName";

function  Search() {
    const [SearchValue,setSearchValue]=useState('');

    return(
        <div> 
            <PageHeader title={
                <div> Search <i className="bi bi-film" style={{margin:"10px"}}></i></div>  } description={"Search"}
            />
            <div className="d-flex justify-content-between align-items-start">
                <h1 className="popularmovieH1">Search movie</h1>
                <div>
                    <div style={{position:"relative",maxWidth:"200px"}}>
                        <input type="text" className='form-control' value={SearchValue} onChange={(event) => setSearchValue(event.target.value)} placeholder='Type to search...' style={{width:"100%"}}/>
                        <i className="bi bi-x-circle" onClick={()=> setSearchValue("")} style={{position:"absolute",color:"black",zIndex:"12",top:"7px",right:'10px',cursor:"pointer"}}></i>
                    </div>
                    <div >
                        <GetMoviesName name={SearchValue}/>
                    </div>
                </div>
               
           </div>
           
                
                   {SearchValue.length >2 ? <div className="container-fluid movie-app flex-fill container">
                        <div className="row">
                             <GetMovies name={SearchValue}/>                       
                        </div>
                    </div> : null}
                    
        </div>
    )    
}

export default Search;