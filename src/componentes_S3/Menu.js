import { useSelector } from "react-redux"

const Menu = () => {

    const cantidad = useSelector(state => state.tareas.tareas.length)

    return (
        <div className="menu">
            <h2>Tareas ({cantidad})</h2>
        </div>
    )
}

export default Menu