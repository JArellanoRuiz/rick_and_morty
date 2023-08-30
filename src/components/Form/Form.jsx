import { useState } from "react";
import validation from "../Validation/validation";
import style from './Form.module.css';
import imgLogin from '../../assets/login_rick2.png'

const Form = ({login}) => {

    const[userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors]= useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]:event.target.value
        });

        setErrors(validation({
            ...userData,
            [event.target.name]:event.target.value
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
     }


     const disableHandler= () =>{
        let disabled;
        for(let error in errors){
            if(errors[error]==="") disabled=false;
            else{
                disabled=true;
                break;
            }
        }
        return disabled;
     }

    return(
        <div className={style.container}>
        <form onSubmit={handleSubmit}>
            <div>
                <img src={imgLogin} alt="Login App Rick and Morty"></img>
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" value={userData.email} onChange={handleChange}></input>
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" value={userData.password} onChange={handleChange}></input>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div>
                <button disabled={disableHandler()}>Submit</button>
            </div>
            <div>
                <label>APP CREADA POR: JAVIER ARELLANO  jarare@gmail.com</label>
            </div>
            <div>
                <label>Ingresa con usuario: "javier@gmail.com" y password: "123asd"</label>
            </div>
        </form>
        </div>
    )
}

export default Form;