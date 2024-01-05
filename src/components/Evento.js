import Button from './evento/Button'

const Evento = () => {
  const primeiroEvento = () => {
    console.log("Opa! Ativando meu primeiro evento!")
  }

  const segundoEvento = () => {
    console.log("Agora ativei o segundo evento!")
  }

  return (
    <>
      <p>Clique para disparar um evento</p>
      <Button evento={primeiroEvento} text="Primeiro evento" />
      <Button evento={segundoEvento} text="Segundo evento" />
    </>
  )
}

export default Evento
