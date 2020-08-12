import React from "react";
import CountAppItem from "./CountAppItem";

let sampleArray = [
    {summ : '500', info : 'bought something'},
    {summ : '250', info: 'paid taxes'},
    {summ : '100', info : 'paid bills'}
];
class CountAppMain extends React.Component{

    constructor(props){
        super(props);
        this.state = {summ : '', info : '', id : '',
        acountArray : (localStorage.getItem('accAppData')) ? JSON.parse(localStorage.getItem('accAppData')) : sampleArray,
    };
        this.handleClick = this.handleClick.bind(this);
        this.handleSummChange = this.handleSummChange.bind(this);
        this.handleInfoChange = this.handleInfoChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    handleClick(){
        const item = {summ : this.state.summ, info : this.state.info};
        this.setState(({ acountArray }) => ({
            summ : '',
            info : '',
            acountArray: [...acountArray, item],
        }));
    };
    handleSummChange(e){
        this.setState({summ : e.target.value})
    };
    handleInfoChange(e){
        this.setState({info : e.target.value})
    };
    deleteItem(e){  //думаю можно проще
        let elIndex = Number(e.target.parentNode.id); 
        this.setState({
            acountArray: this.state.acountArray.filter((el)=> this.state.acountArray.indexOf(el) !== elIndex)
        });
    };
    save(){
        localStorage.setItem('accAppData', JSON.stringify(this.state.acountArray));
    };
    render(){
        this.save();
        return(
            <>
            <h3>Home Acountant App</h3>
            <ul>
                {this.state.acountArray.map((item, index) =>(

                    <CountAppItem 
                    key={index}
                    summ={item.summ}
                    info={item.info}
                    id={index}
                    onClick={(e)=>this.deleteItem(e)}
                    />

                ))}
            </ul>
            <input type="text" placeholder="summ..." onChange={this.handleSummChange} value={this.state.summ}>
            </input><input type="text" placeholder="information..." onChange={this.handleInfoChange} value={this.state.info}></input>
            <button className="add" onClick={this.handleClick}>Add</button>
            </>
        )
    } 
};

export default CountAppMain;