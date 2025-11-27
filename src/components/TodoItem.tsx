import  type {Props} from "../types/PropsType.tsx"
// import {Button} from "./Button.tsx"

const TodoItem = ({todo , onDelete, isSelected,onToggleSelect}: Props) => {
    return(
        // Style de la Liste des Todo
        <div className="card-body row my-2">
            <p className="card-text text-sucess col-4">
                <span className={`me-3  badge rounded-pill  
                 ${/*Vérification de la Priorité pour la couleur de badge*/
                    todo.priority === "Basse" ? "text-bg-success" :
                    todo.priority === "Moyenne" ? "text-bg-warning" :
                   "text-bg-danger"}`}>{todo.priority}
                </span> 
                {todo.text}
                 
            </p>
            
            <input type="checkbox" className="form-check-input mx-4 col-1" checked={isSelected} onChange={() => onToggleSelect(todo.id)}/>
            
            <button 
            className='btn btn-outline-danger col-3'
            onClick={onDelete}>
                <i className="fa-regular fa-trash-can"></i>
            </button>
            
            
        </div>
        
    )
}
//Pour pouvoir l'importer sur d'autres fichiers
export default TodoItem