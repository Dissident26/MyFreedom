import React from "react";

const date = new Date();
const year = new RegExp(`^([${date.getFullYear()}-${date.getFullYear()+1}]){4}$`);
const regExp = {
    cardNumber : /\d{16}/,
    cardName : /\D[a-z]{2,}/i,
    cardValidMonth : /^(0[1-9]|1[0-2])$/,
    cardValidYear : year,
    cvv : /\d{3}/,
};
const errors = {
    cardNumber : '*Number should contain 16 digits',
    cardName : '*Name should contain latin letters',
    cardValidMonth : '*Month should contain digits 1 to 12',
    cardValidYear : '*Year should contain 4 digits',
    cvv : '*CVV should contain 3 digits',
};
class CardInput extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            cardNumber : '', cardName : '', cardValidYear : '', cardValidMonth : '', cvv : '',
        };
        this.handleClick = this.handleClick.bind(this);
    };

    saveData(event, type){
        this.setState({[type] : event.target.value});
    };
    handleClick(e){
        e.preventDefault();
        this.validate(this.state);
    };
    validate(obj){  
        const errorCounter = [];
        for(let key in obj){
            const item = document.querySelector(`.${key}`);
            const span = item.nextElementSibling;
            //regExp[key].exec(obj[key]) ? item.style.backgroundColor = 'lightgreen' : item.style.backgroundColor = 'pink';
            if(regExp[key].exec(obj[key])){
                item.style.backgroundColor = 'lightgreen';
                span.innerHTML = '';
            } else{
                item.style.backgroundColor = 'pink';
                span.innerHTML = errors[key];
                errorCounter.push(obj[key]);
            };
        };

        (!errorCounter.length) ? this.sendForm() : console.log('error');

    };
    sendForm(){
        const msg = `
        Card validation succesfull!
            card number : ${this.state.cardNumber};
            card name : ${this.state.cardName};
            valid thru : ${this.state.cardValidMonth} ${this.state.cardValidYear};
            CVV : ${this.state.cvv};
        `;
        alert(msg);
    };
    render(){
        return(
            <div className="card-form">
                <form action="">
                    <input type="text" className="cardNumber" placeholder="card number" maxLength="16" onChange={(e)=> this.saveData(e, 'cardNumber')}/><span></span>
                    <input type="text" className="cardName" placeholder="name of holder" onChange={(e)=> this.saveData(e, 'cardName')}/><span></span>
                    <input type="text" className="cardValidMonth" placeholder="valid thru month" maxLength="2" onChange={(e)=> this.saveData(e, 'cardValidMonth')}/><span></span>
                    <input type="text" className="cardValidYear" placeholder="valid thru year" maxLength="4" onChange={(e)=> this.saveData(e, 'cardValidYear')}/><span></span>
                    <input type="text" className="cvv" placeholder="CVV" maxLength="3" onChange={(e)=> this.saveData(e, 'cvv')}/><span></span>
                    <input type="submit" value="Add Card" onClick={this.handleClick}/>
                </form>
            </div>
        )
    }
};

export default CardInput;