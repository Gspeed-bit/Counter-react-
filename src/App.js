import React, { Component } from 'react'
import randomColor from "randomcolor";
import CompDidUpdate from "./Component/LifeCycleMethod"

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      count :0,
      color:""
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.resetInputField = this.resetInputField.bind(this);
  }

increment(){
this.setState((prevState)=>{
return{
  count: prevState.count +1
}

})
}

decrement(){
this.setState((prevState)=>{
  return{
    count: prevState.count -1
  }
  
})

}

resetInputField(){
  this.setState((prevState)=>{
    return{
      count: 0
    }
  })
}

componentDidUpdate(prevProps, prevState){
  if (prevState.count !== this.state.count){
        const newColor = randomColor()
        this.setState({color: newColor})

  }
}



  render() {
  
    return (
      <div>
<CompDidUpdate color ={this.state.color} decrement ={this.decrement} increment ={this.increment} count ={this.state.count} resetInputField ={this.resetInputField}/>

        
      </div>
    )
  }
}

