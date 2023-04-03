import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function NetworkCall(){

    const [data, setData] = useState(null)
    
    let onGetData = async() => {
        try {
            let {data} = await axios.get('http://localhost:5000/users')
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onGetData()
    }, [])

    if(data === null) return <div>Loading</div>
    
    return(
        <div>
            {
                data.map((value, index) => {
                    return(
                        <div key={index}>{value.username}, {value.password}</div>
                    )
                })
            }
        </div>
    )
}

