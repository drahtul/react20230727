import { useEffect, useState } from "react"

const Efectos = () => {

    const [contador, setContador] = useState(0)

    //Comportamiento básico
    useEffect(() => {
        //acciones que se van ejecutar cada vez que el componente se redibuje
    });

    //Comportamiento con dependencias
    useEffect(() => {
        //acciones que se van a ajecutar cuando cambie alguna de las cosas referencias en nuestro array de dependencias
    }, [contador]);

    //Comportamiento de carga
    useEffect(() => {
        //acciones que se van a ejecutar cuando se carga el componente, solo una vez
    }, []);

    return (
        <div>Efectos</div>
    )
}

export default Efectos