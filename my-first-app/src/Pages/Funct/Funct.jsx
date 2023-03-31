import {useState, useEffect, useRef} from 'react';
import ComponentInput from './ComponentInput';

export default function Funct(){

    // useState
    const [data, setData] = useState([])

    const onSubmit = (todo, date) => {
        // 2. Validasi inputan
        if(!todo || !date) return alert('Data Must be Filled!')

        // 3. Simpan kedalam state
        // setData((prev) => 
        //     [
        //         ...prev,
        //         {todo, date}
        //     ]
        // )
        const currentData = [...data]
        currentData.push({todo, date})
        setData(currentData)
    }   

    return(
        <div style={{padding: '0px 50px'}}>
            <ComponentInput myFunction={onSubmit} />


            <table style={{border: '1px solid gray', marginTop: '50px', width: '300px'}}>
                <thead>
                    <tr >
                        <td>No</td>
                        <td>Todo</td>
                        <td>Date</td>
                        <td>
                            Action
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, index) => {
                            return(
                                <tr>
                                    <td>
                                        {index+1}
                                    </td>
                                    <td>
                                        {value.todo}
                                    </td>
                                    <td>
                                        {value.date}
                                    </td>
                                    <td>
                                        <button onClick={() => onSubmit()}>
                                            Edit
                                        </button>
                                        <button>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}