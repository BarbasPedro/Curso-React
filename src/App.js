import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Empresa from "./pages/Empresa"
import Contato from "./pages/Contato"
import NavBar from "./pages/layout/Navbar"
import Footer from "./pages/layout/Footer"

function App() {
  return(
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/empresa"> <Empresa /> </Route>
        <Route path="/contato"> <Contato /> </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
