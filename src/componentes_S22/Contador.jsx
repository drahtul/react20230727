//rafce
import { useEffect, useState } from "react";

const Contador = () => {

    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);

    useEffect(() => {
        document.title = `Contador: ${contador} - Contador2: ${contador2}`;
    }, [contador, contador2])

    const contar = () => {
        setContador(contador + 1);
    }

    const contar2 = () => {
        setContador2(contador2 + 1);
    }


    return (
        <div>
            <input type="button" value="Contar" onClick={contar} /><br/>
            <input type="button" value="Contar 2" onClick={contar2} />
            <h2>{contador}</h2>
            <h2>{contador2}</h2>
        </div>
    )
}

export default Contador