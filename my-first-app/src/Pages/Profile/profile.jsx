import { Link } from "react-router-dom";
import List from "../../Components/list"

import './profile.css';

// './../../Supports/Images/a.jpg'

export default function Profile(){
    return(
        <div>
            <h1 className="bebas">
                List Students 
            </h1>
            <ol>
                <List data={{name: 'Enzo', umur: 17}} />
            </ol>
            <Link to='/transaction'>
                <h1>
                    Go to Transation Page
                </h1>
            </Link>
        </div>
    )    
}
