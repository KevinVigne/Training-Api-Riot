import type {Button} from "../types/ButtonType" 
const  Boutton = ({onClick, className, text}:Button) => {
    return (
        <button
            onClick={onClick}
            className={className}
            >
        {text}
        </button>
    );
}
export default Boutton