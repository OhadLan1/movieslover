const PageHeader = ({ title, description }) => {
    return (
      <>
       <div className="PageHeaderDiv">
            <h1>{title}</h1>
            <p>{description}</p>
       </div>
      </>
    );
  };
  
  export default PageHeader;