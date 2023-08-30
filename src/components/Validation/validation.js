

const validation =(userData) => {
    
    const errors = {};
    
    if (!/\S+@\S+\.\S+/.test(userData.email) ){
        errors.email='el email ingresado no es válido.';
    }

    if(!userData.email){
        errors.email='el email no puede estar vacio';
    }

    if(userData.email.length > 35){
        errors.email = 'El email debe ser inferior a 35 caracteres';
    }

    if(!/^(?=.*\d).+$/.test(userData.password)){
        errors.password = 'Pasword debe tener al menos un número';
    }

    if(!/^(?=\w*\d)(?=\w*[a-z])\S{6,10}$/.test(userData.password) ){
        errors.password = 'Pasword debe tener una longitud entre 6 y 10 caracteres y almenos un digito';
    }
    
    return errors;

  
}

export default validation;