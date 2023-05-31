import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';

const Formulario = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("Sus datos fueron enviados correctamente");
    }

    return (
        <>
            <h2>Formulario</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <FormLabel htmlFor='nombre'>Nombre</FormLabel>
                    <FormControl name="nombre" type="text" id="nombre" {...register("nombre", {
                        required: true,
                        maxLength: 20,
                        minLength: 5,
                        pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/u
                    })} />
                    {errors.nombre?.type === "required" && <p>El campo nombre es requerido</p>}
                    {errors.nombre?.type === "maxLength" && <p>El campo nombre debe tener menos de 20 caracteres</p>}
                    {errors.nombre?.type === "minLength" && <p>El campo nombre debe tener como minimo 5 caracteres</p>}
                    {errors.nombre?.type === "pattern" && <p>Hay caracteres inválidos en su nombre</p>}
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor='apellido'>Apellido</FormLabel>
                    <FormControl type="text" name='apellido' id="apellido" {...register("apellido", {
                        required: true,
                        maxLength: 20,
                        minLength: 5,
                        pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/u
                    })} />
                    {errors.apellido?.type === "required" && <p>El campo apellido es requerido</p>}
                    {errors.apellido?.type === "maxLength" && <p>El campo apellido debe tener menos de 20 caracteres</p>}
                    {errors.apellido?.type === "minLength" && <p>El campo apellido debe tener como minimo 5 caracteres</p>}
                    {errors.apellido?.type === "pattern" && <p>Hay caracteres inválidos en su apellido</p>}
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor='dni'>DNI</FormLabel>
                    <FormControl type="numer" id="dni" {...register("dni", {
                        required: true,
                        pattern: /^(?:\d{7,8}|\d{2}\.\d{3}\.\d{3})$/
                    })} />
                    {errors.dni?.type === "required" && <p>Debe ingresar un dni</p>}
                    {errors.dni?.type === "pattern" && <p>Debe ingresar un dni válido</p>}
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <FormControl type="email" id="email" {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
                    })} />
                    {errors.email?.type === "pattern" && <p>El formato del email es incorrecto</p>}
                    {errors.email?.type === "required" && <p>Ingrese un mail</p>}
                </FormGroup>
                <Button type="submit">Enviar</Button>
            </Form>
        </>
    );
};

export default Formulario;