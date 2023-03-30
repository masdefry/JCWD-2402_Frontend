import {useState, useEffect, useRef} from 'react';
import Card from '../../Components/FlashSale/Card';

export default function Funct(){

    const [number, setNumber] = useState(1)
    const [alpha, setAlpha] = useState('abc')
    const [data, setData] = useState([])

    const todo = useRef()
    const date = useRef()

    const onChangeNumber = (operator) => {
        if(operator === '+'){
            if(number !== 10) setNumber(number + 1)
        }else{
            
        if(number !== 0) setNumber(number - 1)
        }
    }

    const onChangeAlpha = () => {
        setAlpha('xyz')
    }

    const onSubmit = () => {

        if(!todo.current.value || !date.current.value) return alert('Data Must be Filled')

        const currentData = [...data]

        const createData = { todo: todo.current.value, date: date.current.value }
        currentData.push(createData)
        setData(currentData)
    }

    const onDeleteData = (idx) => {
        const currentData = [...data]
        currentData.splice(idx, 1)
        setData(currentData)
    }

    // === componentDidMount
    useEffect(() => {
        console.log('Component Did Mount Running')
    }, [])

    // === componentDidUpdate
    useEffect(() => {
        console.log('Component Did Update Running')
    }, [number, alpha])

    // === componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('Component Did Update Running')
        }
    }, [])
    
    return(
        <div style={{padding: '0px 50px'}}>
            {/* <h1>
                Pages Funct
            </h1>

            <button onClick={() => onChangeNumber('-')}>
                -
            </button>
            <h3>
                {number}
            </h3>
            <button onClick={() => onChangeNumber('+')}>
                +
            </button>

            <button onClick={onChangeAlpha}>
                Merubah State Alpha
            </button> */}

            <h1>
                todolist
            </h1>

            <div>
                Todo: 
            </div>
            <div>
                <input ref={todo} type='text' placeholder='Input your activity' />
            </div>
            <div style={{marginTop: '10px'}}>
                Date: 
            </div>
            <div>
                <input ref={date} type='date' placeholder='Input your activity' style={{width: '15.9%'}} />
            </div>
            <div style={{marginTop: '15px'}}>
                <button onClick={onSubmit}>
                    Submit
                </button>
            </div>



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
                                        <button>
                                            Edit
                                        </button>
                                        <button onClick={() => onDeleteData(index)} style={{marginLeft: '10px'}}>
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