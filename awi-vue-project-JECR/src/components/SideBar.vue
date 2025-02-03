<script setup>
import {useRegistrarStore} from '@/modules/registro/stores/registrarStore';
import { ref,watch } from 'vue';
const registrarStore = useRegistrarStore();
const nombre = ref(registrarStore.nombre.value);
const email = ref(registrarStore.email.value);

watch(() => registrarStore.nombre, (newValue) =>{
    nombre.value = newValue;
});
watch(() => registrarStore.email, (newValue) =>{
    email.value = newValue;
});
</script>

<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ nombre }}</h3>
        <h3>Email: {{ email }}</h3>
        <ul>
            <li><RouterLink to="/contador">Contador</RouterLink></li>
            <li><RouterLink to="/lista-de-tareas">Lista de tareas</RouterLink></li>
            <li><RouterLink to="/registrar">Registrar</RouterLink></li>

        </ul>
        
        
    </div>
</template>

<style>
.sidebar{
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>