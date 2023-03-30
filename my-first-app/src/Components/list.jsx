export default function List(props){
    return(
        <div>
            <li>
                {props.data[0]} 
            </li>
            <li>
                {props.data[1]}
            </li>
        </div>
    )
}