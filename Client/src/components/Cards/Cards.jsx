import Card from '../Card/Card.jsx';
import style from './Cards.module.css';

export default function Cards({characters,onClose}) {
   //console.log(characters)
   return (
   <div className={style.container}>
      {characters.map(({id,name,species,gender,origin,image}) => {
       return (  
         <Card 
            key = {id}
            id ={id}
            name ={name}
            species ={species}
            gender ={gender}
            origin ={origin.name}
            image ={image}
            onClose={onClose}
         />
       )
      })
   }
   </div>
  );
}


/* <button onClick={props.onClose}>X</button>
{data.map((personaje, i) => (
   <div key={i}>
      <p>name: {personaje.name}</p>
      <p>species: {personaje.species}</p>
      <p>gender: {personaje.gender}</p>
      <p>originName: {personaje.origin.name}</p>
      <img src={personaje.image} alt='imagen' />
   </div>
))} */