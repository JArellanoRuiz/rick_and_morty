import Card from './Card';

export default function Cards({characters}) {
   //console.log(characters)
   return (
   <div>
      {characters.map(({id,name,status,species,gender,origin,image}) => {
       return (  
         <Card 
            key = {id}
            id ={id}
            name ={name}
            status ={status}
            species ={species}
            gender ={gender}
            origin ={origin.name}
            image ={image}
            onClose={() => alert('Emulamos que se cierra la card')}
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