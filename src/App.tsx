import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.tsx" ;
import { ToDoList } from "./pages/ToDoList.tsx";
import { ChampionList } from "./pages/ChampionList.tsx";
import { Champion } from "./pages/Champion.tsx"

function App() {
  return (
    <BrowserRouter>
      <nav className="d-flex row justify-content-center text-center">
        <Link to="/" className="button py-3">Accueil</Link> 
        <Link to="/taches" className="button py-3">Liste des Tâches</Link>
        <Link to="/champions" className="button py-3" >Liste des Champions</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taches" element={<ToDoList />} />
        <Route path="/champions" element={<ChampionList />}/>
        <Route path={`/champion/:id`} element={<Champion />}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
