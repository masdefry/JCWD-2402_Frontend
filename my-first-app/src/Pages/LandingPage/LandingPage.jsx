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

    return(
        <div>
            {/* Section-1 Jumbotron */}
            <div style={{ backgroundColor: 'GrayText', height: '300px' }}>
                Jumbotron
            </div>

            {/* Section-2 Flash Sale */}
            {/* <FlashSale data={data} /> */}

            <ComponentTodo data={todo} />
        </div>
    )
}