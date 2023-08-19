
export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   // console.log("Este es:"+name);
   // console.log("Este es:"+status);
   // console.log("Este es:"+species);

   return (
      <div>     
         <button onClick={onClose}>X</button>
         <p>Nombre: {name}</p>
         <p>Especie: {species}</p>
         <p>Genero: {gender}</p>
         <p>Origen: {origin}</p>
         <img src={image} alt='imagen' />
      </div>
   );
}

