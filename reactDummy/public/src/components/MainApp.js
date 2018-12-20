import React from 'react';
import Button from './Button';

export default class MainApp extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        this.reset = this.reset.bind(this);
        
        this.state = {
            counter:0
        }
    }

    render(){
        return(
            <div>
                Some text {this.state.counter}
                <Button 
                    name={'add'}
                    handleClick={this.onClick}
                />
                <Button 
                    name={'reset'}
                    handleClick={this.reset}
                />
            </div>
        );
    }

    onClick(){
        this.setState((prevState)=>{
            return{
                counter: prevState.counter + 1
            }
        })
    }

    reset(){
        this.setState(()=>{
            return{
                counter: 0
            }
        })
    }
}