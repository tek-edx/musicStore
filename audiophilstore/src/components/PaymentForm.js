import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'




export default class PaymentForm extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div id="PaymentForm" style={{display: 'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems: 'center'}}>
                <Cards
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focused={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                />
                <form style={{display:'flex',flexDirection: 'column',width: '300px',
            marginTop: '1rem'}}>
                    <input 
                        style={{
                            height: '30px',
                            width: '90%',
                            margin: '1px auto'
                        }}
                        type="tel"
                        name="number"
                        placeholder="Card Number"

                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        style={{
                            height: '30px',
                            width: '90%',
                            margin: '1px auto'
                        }}
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        style={{
                            height: '30px',
                            width: '90%',
                            margin: '1px auto'
                        }}
                        type="text"
                        name="expiry"
                        placeholder="MM/YY Expiry"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        style={{
                            height: '30px',
                            width: '90%',
                            margin: '1px auto'
                        }}
                        type="tel"
                        name="cvc"
                        placeholder="CVC"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
          
        </form>
            </div>
        );
    }
}