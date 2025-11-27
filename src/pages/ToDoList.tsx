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
    <h1>To Do List</h1>
    <div className=" container-fluid w-100">
      <div className="container d-flex flex-column justify-content center">
        <input
        type="text"
        className="text-info"
        placeholder="Ajouter une tâche"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <select
          value={priority}
          onChange={(f) => setPriority(f.target.value as Priority)}
        >
          <option value="Urgente">Urgente</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
        <Button 
          className="btn btn-success" 
          onClick={addTodo}
          text = "Ajouter"
          disabled = {falseDisabled}
        />
      </div>
        <div className="d-flex justify-between">
          <div className=" my-2">
            <Button 
              className={`btn btn-primary ${filter === "Tous" ? "btn-info" : " "}`}
              onClick={() => setFilter("Tous")}
              text= {totalButtonText}
              disabled = {falseDisabled}
            />

            <Button
              className={`btn btn-primary  ${filter === "Urgente" ? " btn-danger" : " "}`}
              onClick={() => setFilter("Urgente")}
              text = {urgentButtonText}
              disabled = {falseDisabled}
            />
            <Button
              className={`btn btn-primary ${filter === "Moyenne" ? " btn-warning" : " "}`}
              onClick={() => setFilter("Moyenne")}
              text={mediumButtonText}
              disabled = {falseDisabled}
            />
            <Button
              className={`btn btn-primary ${filter === "Basse" ? " btn-success" : " "}`}
              onClick={() => setFilter("Basse")}
              text = {lowButtonText}
              disabled = {falseDisabled}
            />

            </div>
            <Button
              className="btn btn-primary"
              onClick={finishedSelected}
              text = {finishedSelectionButtonText}
              disabled={selectedTodos.size === 0}
            />
          </div>
          {filteredTodos.length > 0 ? (
              <div>
                {filteredTodos.map((todo) => (
                  <div key={todo.id}>
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
            <div className="d-flex justify-center align-center">
              <p>Aucune Tâche Dans ce Filtre</p>
            </div>
          )}
      </div>
      </div>
  )
}