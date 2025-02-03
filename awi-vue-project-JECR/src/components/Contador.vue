<template>
    <h1>Hola Mundo</h1>
   <p>{{ contador }}</p>
   <button @click="incrementar">incrementar</button>
   <button @click="decremetar">decremetar</button>
  </template>
  
  <script setup>
  import {ref} from 'vue';
  const contador =  ref(0);
  
  const incrementar = () => {
    contador.value++;
  }
  const decremetar = () => {
    contador.value--;
  }
  
  </script>
  
  <style scoped>
  
  p {
    color: red;
  }
  
  </style>
  