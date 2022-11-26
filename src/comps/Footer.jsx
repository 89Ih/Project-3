import circle from '../icons/circle.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react'
import { SessionContext } from '../contexts/SessionContext'


const Footer = () => {

     const { isAuthenticated } = useContext(SessionContext)
   
     return (
        <footer className="css  d-flex algin-item-end">        
        
        {isAuthenticated ? (
    
       <img src= {circle} alt={'circle'} className='c-success'/>

      ) : (
       
        <img src= {circle} alt={'circle'} className='c-danger'/>
      )}
        
        </footer>
      );
}
 
export default Footer;