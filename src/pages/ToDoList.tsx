import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem.tsx";
import Button from "../components/Button.tsx"
import type { Priority } from "../types/PriorityType.tsx";
import type { Todo } from "../types/TodoType.tsx";

export function ToDoList() {

  const [input , setInput] = useState<string>("")
  const [priority, setPriority]= useState<Priority>("Moyenne")
  const savedTodos = localStorage.getItem("todos")
  const initialTodos = savedTodos ? JSON.parse(savedTodos) : []
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [filter , setFilter] = useState<Priority | "Tous"> ("Tous")

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

function addTodo(){
  if(input.trim() == ""){
    return
  }
  
    const newTodo: Todo = {
    id: Date.now(),
    text: input.trim(),
    priority: priority

  }
  const newTodos = [newTodo, ...todos]
  setTodos(newTodos)
  setInput("")
  setPriority("Moyenne")
}

let filteredTodos: Todo[] = []

if(filter === "Tous"){
  filteredTodos = todos
}else{
  filteredTodos = todos.filter((todo)=> todo.priority == filter)
}

const urgentCount = todos.filter((t)=> t.priority === "Urgente").length;
const mediumCount = todos.filter((t)=> t.priority === "Moyenne").length;
const lowCount = todos.filter((t)=> t.priority === "Basse").length;
const totalCount = todos.length;
const urgentButtonText = "Urgente ( "+ urgentCount +" )";
const mediumButtonText = "Moyenne ( "+ mediumCount + " )";
const lowButtonText = "Basse ( " + lowCount + " )";
const totalButtonText = "Tous (" +totalCount+")";
const falseDisabled:boolean = false;




function deleteTodo(id:Number){
  const newTodos = todos.filter((todo) => todo.id !== id)
  setTodos(newTodos)
}

const[selectedTodos , setSelectedTodos] = useState<Set<number>>(new Set())
const finishedSelectionButtonText = "Marquer comme Terminé ("+ selectedTodos.size+")"

function toggleSelectedTodos(id:number){
  const newSelected = new Set(selectedTodos)
  if(newSelected.has(id)) {
    newSelected.delete(id)
  }else{
    newSelected.add(id)
  }
  setSelectedTodos(newSelected)
}
function finishedSelected() {
  const newTodo = todos.filter((todo) =>{
    if(selectedTodos.has(todo.id)){
      return false
    }else {
      return true
    }
  })
  setTodos(newTodo)
  setSelectedTodos(new Set())
  }
  return (
  <div>
    <h1 className="title d-flex justify-content-center">Liste des Tâches</h1>
    <div className=" container-fluid">
      <div className="container d-flex flex-column justify-content-center">
        <input
        type="text"
        className="button"
        placeholder="Ajouter une tâche"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <select
          value={priority}
          onChange={(f) => setPriority(f.target.value as Priority)}
          className="button py-2 my-3"
        >
          <option value="Urgente">Urgente</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
        <Button 
          className="btn addButton my-3" 
          onClick={addTodo}
          text = "Ajouter"
          disabled = {falseDisabled}
        />
      </div>
        <div className="d-flex  row col-12 flex-row my-3">
          <div className=" my-2 col">
            <Button 
              className={`btn  m-2 ${filter === "Tous" ? "btn-info" : "button "}`}
              onClick={() => setFilter("Tous")}
              text= {totalButtonText}
              disabled = {falseDisabled}
            />

            <Button
              className={`btn m-2  ${filter === "Urgente" ? " btn-danger" : "button "}`}
              onClick={() => setFilter("Urgente")}
              text = {urgentButtonText}
              disabled = {falseDisabled}
            />
            <Button
              className={`btn m-2 ${filter === "Moyenne" ? " btn-warning" : "button "}`}
              onClick={() => setFilter("Moyenne")}
              text={mediumButtonText}
              disabled = {falseDisabled}
            />
            <Button
              className={`btn m-2 ${filter === "Basse" ? " btn-success" : " button"}`}
              onClick={() => setFilter("Basse")}
              text = {lowButtonText}
              disabled = {falseDisabled}
            />

            </div>
            <Button
              className="btn button col-4"
              onClick={finishedSelected}
              text = {finishedSelectionButtonText}
              disabled={selectedTodos.size === 0}
            />
        </div>
        {filteredTodos.length > 0 ? (
            <div className="d-flex flex-column ">
              {filteredTodos.map((todo) => (
                <div key={todo.id} className="text d-flex row justify-content-around ">
                  <TodoItem
                    todo={todo}
                    isSelected={selectedTodos.has(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                    onToggleSelect={toggleSelectedTodos}
                  />
                </div>
              ))}
            </div>

        ) : (
          <div className="d-flex justify-content-center">
            <p className="text">Aucune Tâche pour ce Filtre</p>
          </div>
        )}
      </div>
      </div>
  )
}