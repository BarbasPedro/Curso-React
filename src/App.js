import './App.css'

import Evento from './components/Evento'
import Form from './components/Form'

function App() {
  return(
    <div className='App'>
      <h1>Testando Eventos</h1>
      <Form />
      <Evento numero={1}/>
      <Evento numero={2}/>
    </div>
  )
}

export default App
