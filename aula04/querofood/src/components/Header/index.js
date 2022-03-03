import './style.css';
import logo from './assets/logo.jpg'
export default function header(){
    return(
        <header className='header_container'>
     <img src={logo} alt="logo" className='logo_header' />
     <ul className='list_item'>
         <li className='item' >Home</li>
         <li className='item' >Sobre</li>
         <li className='item'>Contato</li>
     </ul>
     </header>
    )
}