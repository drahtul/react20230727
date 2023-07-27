import Edad from "./Edad"

const Persona = ({name, dob}) => {
  return (
    <p>{name.first} {name.last} - <Edad {...dob} /></p>
  )
}

export default Persona