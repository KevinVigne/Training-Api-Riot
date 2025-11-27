import type { Todo } from "./TodoType"

export type Props = {
    todo:Todo
    onDelete: () => void
    isSelected : boolean
    onToggleSelect: (id:number)=> void
}