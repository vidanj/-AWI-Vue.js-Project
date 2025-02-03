import axios from "axios";

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=29.1026&longitude=-110.9773&hourly=temperature_2m&timezone=auto&forecast_days=1';

export const getTemperatura = async () => {
    try {
        const respuesta = await axios.get(API_URL);
        const temperaturaActual = respuesta.data.hourly.temperature_2m[0]; // Primer registro horario
        return temperaturaActual;
    } catch (error) {
        console.error("Error al obtener la temperatura:", error);
        return null;
    }
};