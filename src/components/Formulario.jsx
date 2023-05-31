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
            <div className='text-light p-5 bg-dark rounded formulario mx-auto'>
            <h2 className='text-light'>Formulario</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>

                        <FormGroup>
                            <FormLabel htmlFor='nombre'>Nombre</FormLabel>
                            <FormControl name="nombre" type="text" id="nombre" {...register("nombre", {
                                required: true,
                                maxLength: 20,
                                minLength: 5,
                                pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/u
                            })} />
                            <div className='error-container'>
                                {errors.nombre?.type === "required" && <div className='error-msg'>El campo nombre es requerido</div>}
                                {errors.nombre?.type === "maxLength" && <div className='error-msg'>El campo nombre debe tener menos de 20 caracteres</div>}
                                {errors.nombre?.type === "minLength" && <div className='error-msg'>El campo nombre debe tener como minimo 5 caracteres</div>}
                                {errors.nombre?.type === "pattern" && <div className='error-msg'>Hay caracteres inválidos en su nombre</div>}
                            </div>
                        </FormGroup>
                        <FormGroup className=''>
                            <FormLabel htmlFor='apellido'>Apellido</FormLabel>
                            <FormControl type="text" name='apellido' id="apellido" {...register("apellido", {
                                required: true,
                                maxLength: 20,
                                minLength: 4,
                                pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/u
                            })} />
                            <div className='error-container'>
                                {errors.apellido?.type === "required" && <div className='error-msg'>El campo apellido es requerido</div>}
                                {errors.apellido?.type === "maxLength" && <div className='error-msg'>El campo apellido debe tener menos de 20 caracteres</div>}
                                {errors.apellido?.type === "minLength" && <div className='error-msg'>El campo apellido debe tener como minimo 5 caracteres</div>}
                                {errors.apellido?.type === "pattern" && <div className='error-msg'>Hay caracteres inválidos en su apellido</div>}
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel htmlFor='dni'>DNI</FormLabel>
                            <FormControl type="numer" id="dni" {...register("dni", {
                                required: true,
                                pattern: /^(?:\d{7,8}|\d{2}\.\d{3}\.\d{3})$/
                            })} />
                            <div className="error-container">
                                {errors.dni?.type === "required" && <div className='error-msg'>Debe ingresar un dni</div>}
                                {errors.dni?.type === "pattern" && <div className='error-msg'>Debe ingresar un dni válido</div>}
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <FormControl type="email" id="email" {...register("email", {
                                required: true,
                                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
                            })} />
                            <div className="error-container">
                                {errors.email?.type === "pattern" && <div className='error-msg'>El formato del email es incorrecto</div>}
                                {errors.email?.type === "required" && <div className='error-msg'>Ingrese un mail</div>}
                            </div>
                        </FormGroup>
                    <Button type="submit">Enviar</Button>
                </Form>
            </div>
        </>
    );
};

export default Formulario;