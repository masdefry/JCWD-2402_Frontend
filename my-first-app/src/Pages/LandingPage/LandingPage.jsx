import FlashSale from "../../Components/FlashSale/FlashSale";

export default function LandingPage(){

    const data = [
        { name: 'Sepatu', price: 100000, discount: 10, stock: 100, image: '...' },
        { name: 'Kaos', price: 100000, discount: 10, stock: 100, image: '...' }
    ]

    // const todo = [
    //     {todo: 'Makan'},
    //     {todo: 'Main'},
    //     {todo: 'Belajar'}
    // ]

    return(
        <div>
            {/* Section-1 Jumbotron */}
            <div style={{ backgroundColor: 'GrayText', height: '300px' }}>
                Jumbotron
            </div>

            {/* Section-2 Flash Sale */}
            <FlashSale data={data} />

            {/* {
                todo.map((value, index) => {
                    return(
                        <div> 
                            {value.todo}
                        </div>
                    )
                })
            } */}
        </div>
    )
}