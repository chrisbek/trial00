import React from 'react';

export default class Button extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render(){
        return(
            <div>
                <button onClick={this.onClick}>{this.props.name}</button>
            </div>
        );
    }

    onClick(){
        this.props.handleClick();
    }
}