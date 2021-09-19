import React, { Component } from 'react'



export class compDidUpdate extends Component {
    constructor(){
        super()
        this.state={
         
        }
    }

    render() {
     
        return (
            <div>
                <h1 style={{color:this.props.color}}>{this.props.count}</h1>

                <section>
                <button onClick={this.props.increment}> Increment</button>
                <button onClick={this.props.decrement}> Decrement</button>
                <button onClick={this.props.resetInputField}> Reset</button>
                
                </section>
            </div>
        )
    }
}


export default compDidUpdate