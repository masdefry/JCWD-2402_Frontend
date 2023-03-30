export default function Card(props){
    return(
        
            <>
                {
                    props.dataFromFlashSale.map((value, index) =>{
                        return(
                            <div style={{ flex: 1, border: '1px solid black', padding: '10px' }}>
                                <div style={{ backgroundColor: 'black', color: 'white', height: '200px' }}>
                                    Image
                                </div>
                                <div>
                                    <h3>
                                        {value.name}
                                    </h3>
                                    <h3>
                                        {value.price}
                                    </h3>
                                    <h3>
                                        {value.price - ((value.price*value.discount) / 100)}
                                    </h3>
                                </div>
                                <div>
                                    Stock: {value.stock}
                                </div>
                                <div>
                                    <button style={{ width: '100%' }}>
                                        Buy Product
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </>
     
    )
}