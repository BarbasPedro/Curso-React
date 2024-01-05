import { useState } from "react";

const Condicional = () => {

  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()

  const enviarEmail = (e) => {
    e.preventDefault()
    setUserEmail(email)
    console.log(`${userEmail}`, 'cadastrado')
  }

  const limparEmail = () => {
    setEmail("")
    }

  return (
    <div>
      <h2>Cadastre seu email</h2>
      <form>
        <input
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          />
        <button type="submit" onClick={enviarEmail}>Enviar</button>
        {userEmail && (
          <div>
            <p>O email do usuário é {userEmail}</p>
            <button type="submit" onClick={limparEmail}>Limpar Email</button>
          </div>
        )}
      </form>
    </div>

  )
}

export default Condicional
