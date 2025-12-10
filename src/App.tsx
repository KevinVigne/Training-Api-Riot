import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.tsx" ;
import { ToDoList } from "./pages/ToDoList.tsx";
import { ChampionList } from "./pages/ChampionList.tsx";
import { Champion } from "./pages/Champion.tsx"

function App() {
  return (
    <BrowserRouter>
      <nav className="d-flex row justify-content-around text-center">
        <Link to="/" className="button col-3 py-2 ">Accueil</Link> 
        <Link to="/taches" className="button  col-3 py-2">Liste des Tâches</Link>
        <Link to="/champions" className="button  col-3 py-2 " >Liste des Champions</Link>
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
