//class component
// "react" here is libarary
import React, {Component} from "react";


// extends is taking some value 

// React.component another way to write the below line
export default class Class extends Component{
   //get a state
   constructor(){
    // super()  is to add or inherit  from react component all the properties inside ......
    super()
    this.state ={count:0}
   }
   handleClick=(val)=>{
    //normal function won't work in class component so arrow function 
    console.log(val)
 this.setState({count:this.state.count+val})

 //why we used state  over there?
   }
   render(){
    return(
  <>
   <h1>Counter App</h1>
   <p>{this.state.count}</p>
   <button style={{backgroundColor: "lightblue"}} onClick={()=>{this.handleClick(1)}}>+</button>
   <button  style={{backgroundColor: "lightblue"}} onClick={()=>{this.handleClick(-1)}}>-</button>
   <button style={{backgroundColor: "lightblue"}} onClick={()=>{this.handleClick(-this.state.count)}}>Reset</button>
   
  </>
    )
   }
}

//<button disabled={this.state.count>=10}onclick=.......same>