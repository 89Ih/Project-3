import header from '../icons/header.png'
const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid d-flex">
          <div  className='w-75' >
            <img src={header} alt={'header'} style={{ height: 75 }} className='mx-2' />
            <span className="p-2 w-100   navbar-brand mb-5 h1 text-light">Master Course</span>
          </div>
          <button className="navbar-toggler flex-shrink-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
          <div className="collapse navbar-collapse flex-shrink-0 " id="navbarNavAltMarkup">
            <div class="navbar-nav "style={{ gap: 10}}>
            <b><a className="nav-link text-light " href="/">Home</a></b>
            <b><a className="nav-link text-light " href="/about">About us</a></b>
            <b><a className="nav-link text-light " href="/contact">Contact</a></b>
            <b><a className="nav-link text-light " href="/courses">All courses</a></b>
            <b><a className="nav-link text-light " href="/create">Add new course</a></b>
            {/* <b><a className="nav-link text-light " href="javascript:history.back()">Back</a></b> */}
          
           </div>
          </div>
        </div>
      </nav>
  
     );
}
 
export default Header;