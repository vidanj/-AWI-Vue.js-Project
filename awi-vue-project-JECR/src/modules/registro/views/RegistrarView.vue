<script setup>
import {Form, Field, ErrorMessage} from 'vee-validate';
import {schema} from '../schemas/validationSchema';
const onSubmit = () => {
    console.log('Se ha enviado el formulario');
}
</script>
<template>
    <div>
        <h2>Formulario de Registro</h2>
         <Form :validation-schema="schema" @submit="onSubmit" >
            <div class="form">
                <label for="nombre">Nombre</label>
                <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su Nombre"/>
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            <div class="form">
                <label for="correo">Correo</label>
                <Field type="email" name="email" id="çorreo" placeholder="Ingrese su Email"/>
                <ErrorMessage name="email"></ErrorMessage>
            </div>
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
         </Form>        
       
    </div>
</template>
<style scoped>

.form{
    margin-bottom: 10px;
}

</style>