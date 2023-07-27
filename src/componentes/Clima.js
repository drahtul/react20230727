import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { guardarPronostico } from "../features/climaSlice";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Pronóstico para Montevideo',
        },
    },
};



const Clima = () => {

    let navigate = useNavigate();

    const dispatch = useDispatch();
    const pronostico = useSelector(state => state.clima.pronostico);
    const pronosticoMin = useSelector(state => state.clima.pronosticoMin);

    useEffect(() => {
        if (localStorage.getItem("usuario") === null) {
            navigate("/");
        } else {
            fetch("https://api.open-meteo.com/v1/forecast?latitude=-34.9033&longitude=-56.1882&daily=temperature_2m_max,temperature_2m_min&timezone=auto")
                .then(r => r.json())
                .then(datos => {
                    console.log(datos);
                    dispatch(guardarPronostico(datos.daily))
                })
        }

    }, [])


    return (
        <div>
            <h2>Clima</h2>
            <p>Clima</p>
            <Bar options={options} data={{
                labels: ["Día 1", "Día 2", "Día 3", "Día 4", "Día 5", "Día 6", "Día 7"],
                datasets: [
                    {
                        label: 'Máximas',
                        data: pronostico,
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                    {
                        label: 'Mínimas',
                        data: pronosticoMin,
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    }
                ],
            }} />
        </div>
    )
}

export default Clima