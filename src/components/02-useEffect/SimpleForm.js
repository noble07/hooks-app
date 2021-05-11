import { useEffect, useState } from 'react';
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    //useEffect es un hook que nos permite ejecutar un efecto secundario
    //cuando algo suceda en nuestros componentes
    useEffect(() => {
        // console.log('hey!');
    }, []);//Si no se le manda un segundo parametro cada que haya un cambio va a volver a disparar el efecto
    //Si se envían [] vacias solo se dispara al cargar el componente

    useEffect(() => {
        // console.log('formState cambió');
    }, [formState]);//Escucha los cambios de este objeto y cuando cambia ejecuta el efecto
    
    useEffect(() => {
        // console.log('email cambió');
    }, [email]);//Escucha los cambios del email y cuando cambia ejecuta el efecto
    //Aplica para funciones u objetos dentro del componente

    const handleInputChange = ({target}) => {

        setFormState({
            ...formState,
            //Los [] es para que computemos el target.name como key del objeto
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {(name === '123') && <Message />}
        </>
    )
}