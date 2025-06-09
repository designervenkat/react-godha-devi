import { Component } from 'react'

export default class Count extends Component {
   constructor(props) {
      super(props)
      this.state = { count: 0 }
   }

   increment = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }))
   }

   render() {
      return (
         <div className='text-white'>
            <h2>Count App using Class Component</h2>
            <div>{this.state.count}</div>
            <button onClick={this.increment}>Increase</button>
         </div>
      )
   }
}
