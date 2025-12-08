import type {Button} from "../types/ButtonType" 
const  Button = ({onClick, className, text}:Button) => {
    return (
        <button
            onClick={onClick}
            className={className}
            >
        {text}
        </button>
    );
}
export default Button