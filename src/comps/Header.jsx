import header from '../icons/header.png'
const Header = () => {
    return ( 
        <nav className="navbar ">
        <div className="container-fluid  flex-row ">
          <div className="p-2">
            <img src={header} alt={'header'} style={{ height: 75 }} className='mx-2' />
            <span className="p-2 w-100   navbar-brand mb-5 h1 text-light">Master Course</span>
          </div>
          <div className="p-2 d-flex flex-row mx-2" style={{ gap: 15 }}>
            <b><a className="nav-link text-light " href="/">Home</a></b>
            <b><a className="nav-link text-light " href="/about">About us</a></b>
            <b><a className="nav-link text-light " href="/contact">Contact</a></b>
          </div>
        </div>
      </nav>
        
     );
}
 
export default Header;