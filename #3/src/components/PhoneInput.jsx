import React from "react";

const regExp = /(\+375)+(29|44|33|25)+(\d{7})/;

class PhoneInput extends React.Component {

    constructor(){
        super();
        this.state = {
            input : '',
        };
    };

    validate(e){
        const div = document.querySelector('.phone-input');
        const p = div.querySelector('P');
        //regExp.exec(e.target.value) ? div.style.borderColor = "green" : div.style.borderColor = "red"; чёт с тернарным не прокатило
        if(regExp.exec(e.target.value)){
            div.style.borderColor = "green";
            div.style.backgroundColor = 'lightgreen';
            p.innerHTML = 'Success!';
            
        } else{
            div.style.borderColor = "red";
            div.style.backgroundColor = 'pink'
            p.innerHTML = 'input phone number in +375XXXXXXXXX format';
        }
    };

    render(){
        return(
            <div className="phone-input">
                <h3>Phone Number Input</h3>
                <input type="tel" placeholder="your phone number here..." maxLength="13" onChange={this.validate}></input>
                <p>input phone number</p>
            </div>
        );
    };
};

export default PhoneInput;