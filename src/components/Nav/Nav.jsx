//import style from "./Nav.module.css";
import SearchBar from '../SearchBar/SearchBar.jsx';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css'

function Nav({onSearch, randomize, logout}) {
   return (
      <nav className={style.nav}> 
         <div>
            <button><NavLink to='/about'>About</NavLink></button>
            <button><NavLink to='/home'>Home</NavLink></button> 
            <button><NavLink to='/favorites'>Favorites</NavLink></button> 
            <button onClick={logout}><NavLink to='/'>Log Out</NavLink></button> 
         </div> 
         <SearchBar onSearch={onSearch} />
         <button onClick={randomize}>Random</button>
      </nav>
   );
}

export default Nav;