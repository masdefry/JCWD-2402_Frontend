import React from 'react';
import { Link } from 'react-router-dom';

class State extends React.Component{

    state = {
        number: 1
    }

    onChangeNumber = () => {
        this.setState({number: ++this.state.number})
    }

    // Dijalankan setelah render pertama kali
    // Fetch data menuju ke server ketika pertama kali component dibuka
    componentDidMount(){
        console.log('Did Mount Running')
    }

    // Dijalankan ketika terjadi perubahan state
    componentDidUpdate(){
        console.log('Did Update Running')
    }

    // Dijalankan sebelum component dihapus
    componentWillUnmount(){
        alert('Are you sure want to leave page?')
    }

    render(){
        return(
            <div>
                {console.log('Render Running')}
                State
                <p>
                    State pengganti dari variable.
                    Ketika terjadi perubahan data, dia akan me-render ulang component nya.
                </p>

                {this.state.number}

                <button onClick={this.onChangeNumber}>
                    +
                </button>
                
                <Link to='/test'>
                    Goto Test
                </Link>
            </div>
        )
    }
}

export default State