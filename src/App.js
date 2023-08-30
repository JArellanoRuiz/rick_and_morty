import {useState, useEffect} from "react";
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Form from "./components/Form/Form";
import Favorites from './components/Favorites/Favorites';
import axios from "axios";
import { Routes , Route , useLocation, useNavigate} from "react-router-dom";

const email="javier@gmail.com";
const password="123asd"

function App() {
const location = useLocation();
const navigate = useNavigate();
const [characters, setCharacters] = useState([]);
const[access, setAccess] = useState(false);


const login = (userData) => {
   if(userData.email=== email && userData.password === password){
      setAccess(true);
      navigate('/home'); // si access es true se da acceso a home
   }

}

 useEffect(() => {
    !access && navigate('/') //como se inicia
    //eslint-disable-next-line
 }, [access])  //si access cambia se redenreiza

const onSearch =(id) => {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

//https://rickandmortyapi.com/api/character/${id}
//https://rym2-production.up.railway.app/api/character/${id}?key=henrym-JArellanoRuiz

const onClose = (id) => {
   const charactersFiltered = characters.filter( 
      character => character.id !== Number(id));
   setCharacters(charactersFiltered);
}

const randomHandler= () => {
   let randomId = (Math.random()*826).toFixed();
   randomId = Number(randomId);
   let memoria = [];

   if (!memoria.includes(randomId)){
      memoria.push(randomId);

   axios(`https://rickandmortyapi.com/api/character/${randomId}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
      });
   }else{
   alert("El personaje ya fue agregado!");
   }
}

const logOutHandler = () => {
    setAccess(false);
 }

   return (

      <div className='App'>

         {
            location.pathname !== '/'
            ? <Nav onSearch = {onSearch} randomize={randomHandler} logout={logOutHandler}/> 
            : null
         }

        
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters}
             onClose={onClose} /> } />
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail />}/>
            <Route path='*' element={<ErrorPage />}/>   
            <Route path='/favorites' element={<Favorites/>} />                
         </Routes>
      </div>
   );
}

export default App;
