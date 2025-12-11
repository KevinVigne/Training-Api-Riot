import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.tsx" ;
import { ToDoList } from "./pages/ToDoList.tsx";
import { ChampionList } from "./pages/ChampionList.tsx";
import { Champion } from "./pages/Champion.tsx"

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg px-3 py-3 myNavbar" >
  <div className="container-fluid">
    <Link to="/" className="navbar-brand fontUp text">
      <span className="fs-3">LeagueDex</span>
    </Link>
    <button
      className="navbar-toggler button"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarMenu"
      aria-controls="navbarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarMenu">
      <ul className="navbar-nav ms-auto">

        <li className="nav-item mx-2">
          <Link to="/" className="nav-link text fontUp button px-3 py-2 rounded">
            Accueil
          </Link>
        </li>

        <li className="nav-item mx-2">
          <Link to="/taches" className="nav-link text fontUp button px-3 py-2 rounded">
            Liste des Tâches
          </Link>
        </li>

        <li className="nav-item mx-2">
          <Link to="/champions" className="nav-link text fontUp button px-3 py-2 rounded">
            Liste des Champions
          </Link>
        </li>

      </ul>
    </div>

  </div>
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
