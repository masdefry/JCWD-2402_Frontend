import { useRef, useState } from "react";

import FlashSale from "../../Components/FlashSale/FlashSale";

import ComponentTodo from './ComponentTodo';

export default function LandingPage(){

    // const data = [
    //     { name: 'Sepatu', price: 100000, discount: 10, stock: 100, image: '...' },
    //     { name: 'Kaos', price: 100000, discount: 10, stock: 100, image: '...' }
    // ]

    const todo = [
        {todo: 'Makan', date:'Besok'},
        {todo: 'Main', date:'Besok'},
        {todo: 'Belajar', date:'Besok'}
    ]

    const [data, setData] = useState([{
        name: '', 
        password: ''
    }])

    const inputName = useRef()
    const inputPassword = useRef()

    const onSubmit = () => {
        let currentData = [...data]

        let obj = {todo: inputTodo.current.value, date: inputDate.current.value}
        currentData.push(obj)
        setData(currentData)
    }

    return(
        <div>
            {/* Section-1 Jumbotron */}
            <div style={{ backgroundColor: 'GrayText', height: '300px' }}>
                Jumbotron
            </div>

            {/* Section-2 Flash Sale */}
            {/* <FlashSale data={data} /> */}

            <ComponentTodo data={todo} />


            <input ref={inputName} type='text' placeholder="Enter your name" />
            <input ref={inputPassword} type='password' />
        
            <button onClick={onSubmit}>
                Submit
            </button>
            <div>
                {data.name}
                {data.password}
            </div>
        </div>
    )
}