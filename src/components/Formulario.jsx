import React from 'react';
import { useForm } from 'react-hook-form';

const Formulario = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='nombre'>Nombre</label>
                    <input name="nombre" type="text" id="nombre" {...register("nombre", {
                        required: true,
                        maxLength: 20,
                        minLength: 5
                    })} />
                    {errors.nombre?.type === "required" && <p>El campo nombre es requerido</p>}
                    {errors.nombre?.type === "maxLength" && <p>El campo nombre debe tener menos de 20 caracteres</p>}
                    {errors.nombre?.type === "minLength" && <p>El campo nombre debe tener como minimo 5 caracteres</p>}
                </div>
                <div>
                    <label htmlFor='apellido'>Apellido</label>
                    <input type="text" name='apellido' id="apellido" {...register("apellido", {
                        required: true,
                        maxLength: 20,
                        minLength: 5
                    })} />
                    {errors.apellido?.type === "required" && <p>El campo apellido es requerido</p>}
                    {errors.apellido?.type === "maxLength" && <p>El campo apellido debe tener menos de 20 caracteres</p>}
                    {errors.apellido?.type === "minLength" && <p>El campo apellido debe tener como minimo 5 caracteres</p>}
                </div>
                <div>
                    <label>DNI</label>
                    <input type="numer" id="" {...register("dni", {
                        max: 60000000,
                        min: 3000000,
                        
                    })} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" id="" {...register("email", {
                        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
                    })} />
                    {errors.email?.type === "pattern" && <p>El formato del email es incorrecto</p>}
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </>
    );
};

export default Formulario;