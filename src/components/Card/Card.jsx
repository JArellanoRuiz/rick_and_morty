
import style from "./Card.module.css";

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div className={style.container}>     
         <div><button className={style.btn} onClick={onClose}>Close X</button></div>
         <img className={style.img} src={image} alt='imagen' />
         <h2 className={style.titulo}>Nombre: {name}</h2>
         <h2 className={style.titulo}>Especie: {species}</h2>
         <h2 className={style.titulo}>Genero: {gender}</h2>
         <h2 className={style.titulo}>Origen: {origin}</h2>
         
      </div>
   );
}

