import { BrowserRouter,Routes, Route , Link } from "react-router-dom";
import Home from "./pages/Home.tsx" ;
import { ToDoList } from "./pages/ToDoList.tsx";
import { ChampionList } from "./pages/ChampionList.tsx";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/toDoList">To Do List</Link> |{" "}
        <Link to="/champions">Liste De Champions</Link> 
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toDoList" element={<ToDoList />} />
        <Route path="/champions" element={<ChampionList />}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
