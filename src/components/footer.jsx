const Footer = ()=>{
    return(
    <footer className="border-top pt-3 py-2 text-center ">
            <span>
            movies lover <i className="bi bi-film" style={{margin:"10px"}}></i>
            </span>
            <span className="mx-2">&copy;hanna</span>
            <span>{new Date().getFullYear()}</span>
    </footer>
    )
}
export default Footer;