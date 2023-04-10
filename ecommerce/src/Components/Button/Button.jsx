import { BsArrowRight } from "react-icons/bs";

export default function Button(props){
    return(
        <button onClick={props.onEvent} className={`flex items-center gap-3 border ${props.borderColor}`}>
            <div className={`flex gap-3 items-center text-white px-7 py-3 relative top-[-3px] left-[-3px] ${props.backgroundColor}`}>
                {props.value} <BsArrowRight />
            </div>
        </button>
    )
}