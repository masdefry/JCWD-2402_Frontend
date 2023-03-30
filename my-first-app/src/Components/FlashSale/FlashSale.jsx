import Card from "./Card";

export default function FlashSale(props){

    

    return(
        <div>
            <div>
                <h3>
                    Flash Sale
                </h3>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
                <Card dataFromFlashSale={props.data} />
            </div>
        </div>
    )
}