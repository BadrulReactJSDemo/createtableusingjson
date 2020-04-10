import React from 'react';
export default class App extends React.Component
{
  constructor()
  {
    super()
    this.state={
        name:"Badrul Haque",
        age:22,
        isSingal:true,
        obj:{'PID':'LG-2345'}
    }
  }
   render()
   {
     return(

       <div className='App'> 
        <h1 style={{color:'red'}}> My name is Badrul Haque . i am from Jajpur </h1>   

        
       <h1 style={{color:'red'}}> My name is {this.state.name}</h1>
       <h1 style={{color:'green'}}> and age is {this.state.age} </h1>
       <h1 style={{color:'gray'}}> am i Singal {JSON.stringify(this.state.isSingal)} </h1>
       <h1 style={{color:'yellow'}}> Product is {JSON.stringify(this.state.obj)} </h1>

       </div>
     )
   }
}