import PageHeader from "./common/pageHeader"

const About = () => {
    return (
      <PageHeader
        title={
          <>
            <div> About movies lover <i className="bi bi-film" style={{margin:"10px"}}></i></div>          
        </>
        }
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam corporis ex doloribus dignissimos hic tempore voluptatem eligendi eaque expedita rem."
      />
    );
  };
  
  export default About;