import {useRef} from 'react';

export default function ComponentInput(props){

     // useRef
     const inputTodo = useRef()
     const inputDate = useRef()

    return(
        <>
            <h1>
                todolist
            </h1>
            <div style={{marginTop: '30px'}}>
                Todo: 
            </div>
            <div>
                <input ref={inputTodo} type='text' placeholder='Input your activity' />
            </div>
            <div style={{marginTop: '10px'}}>
                Date: 
            </div>
            <div>
                <input ref={inputDate} type='date' placeholder='Input your activity' style={{width: '15.9%'}} />
            </div>
            <div style={{marginTop: '15px'}}>
                <button onClick={() => props.myFunction(inputTodo.current.value, inputDate.current.value)}>
                    Submit
                </button>
            </div>
        </>
    )
}