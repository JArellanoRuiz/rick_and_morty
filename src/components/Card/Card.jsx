
import {Link} from 'react-router-dom';
import style from "./Card.module.css";
import { useNavigate, useLocation } from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions';
import {connect} from 'react-redux';
import { useState, useEffect } from 'react';

function Card({id,name,species,gender,origin,image,onClose, addFav, removeFav, myFavorites}) {

//uso de hook navigate handler para link en la imagen
const navigate = useNavigate();
const navigateHandler =() =>{
   navigate(`/detail/${id}`);
}

const location = useLocation();

const[isFav, setIsFav] = useState(false);

const handleFavorite = () => {
  if (isFav){
   setIsFav(false);
   removeFav(id);
  } 
  else {
   setIsFav(true);
   addFav({id,name,image,species,gender,origin, onClose})
  }
}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
   // eslint-disable-next-line
}, [myFavorites]);


   return (
      <div className={style.container}>    

         {
         <button onClick={handleFavorite}>{isFav? '❤️' : '🤍'}</button>     
         }
      
         <div>
            {location.pathname !== "/favorites" &&
            <button className={style.btn} onClick={() => onClose(id)}>Close X</button>
            }  
         </div>
         
         <Link to={`/detail/${id}`}>
            <h2 className={style.titulo}>{name}</h2>
         </Link>
         <img className={style.img} src={image} alt='imagen' onClick={navigateHandler} />
         <h2 className={style.titulo}>Especie: {species}</h2>
         <h2 className={style.titulo}>Genero: {gender}</h2>
         <h2 className={style.titulo}>Origen: {origin}</h2>
         
      </div>
   );
}



const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }

}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => { dispatch(addFav(character))},
      removeFav: (id) => { dispatch(removeFav(id))}
   }
}



export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);