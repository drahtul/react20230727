import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {

    const user = useRef(null);
    const pass = useRef(null);

    let navigate = useNavigate();

    //const [error, setError] = useState("");
    const [error, setError] = useState(false);

    const ingresar = () => {
        const userCampo = user.current.value;
        const passCampo = pass.current.value;
        //console.log(userCampo, passCampo);
        if (userCampo === "a" && passCampo === "a") {
            localStorage.setItem("usuario", "a");
            navigate("/clima");
        } else {
            //setError("Usuario y/o contraseña incorrectos");
            localStorage.clear();
            setError(true);
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <p>Login</p>
            <Link to="/contacto">Escribinos</Link>
            <div>
                <label htmlFor="txtUser">User:</label>
                <input type="text" id="txtUser" ref={user} /><br />
                <label htmlFor="txtPass">Pass:</label>
                <input type="text" id="txtPass" ref={pass} /><br />
                <input type="button" value="Ingresar" onClick={ingresar} />
                {/*error ? <p>Usuario y/o contraseña incorrectos</p> : "" */}
                {error && <p>Usuario y/o contraseña incorrectos</p>}
            </div>
        </div>
    )
}

export default Login