import PageHeader from "./common/pageHeader";
import GetMovies from "./hooks/getMovie";

const Home = ()=>{
  
    
    
    return(
        <>
            <PageHeader title={
            <div> Home movies lover <i className="bi bi-film" style={{margin:"10px"}}></i></div>  } description={"welcom"}/>

           <div className="container-fluid movie-app flex-fill container">
            <h1 className="popularmovieH1">popular movie</h1>
                <div className="row">
                    <GetMovies  name={"spider"}/>
                </div>
           </div>
            
           
        </>
    )
}
export default Home;