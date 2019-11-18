import React, { Component, Fragment } from 'react'
import C04 from './C04'
import C04v2 from './C04v2'
import FuncV01, { C03 } from './FuncV01'
import C03v1 from './FuncV011'
import Dropdown from './DropDown'
import List from './List'
import FormC01 from './FormC01'
import FormC01Uncontrolled from './FormC01Uncontrolled'
import FormC02 from './FormC02'
import ServerCall from './ServerCall'
import { Server } from 'http'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stateLoaded: false
    }
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        stateLoaded: true
      })
    }, 300)
  }

  getNow() {
    const date = new Date()
    return date.toUTCString()
  }

  render() {
    return (
      <Fragment>
        <FormC01 />
        <FormC02 />

        <br />
        <FormC01Uncontrolled />
        <ServerCall />
      </Fragment>
    )
  }
}

export default App


    // if (!this.state.stateLoaded) {
    //   return <div>Loading..</div>
    // } else {
    //   return (
    //     <Fragment>
    //       <FuncV01 color={"red"} text="testText" number={12345}/>
    //       <div>Hello From App.js, with props: {this.props.testProp}</div>
    //       <div>Time now: {this.getNow()}</div>
    //       <C03 text='123123' color='red' user={{name: 'vasya', age: 33}}/>
    //       <C03v1 text='123123' color='red' user={{name: 'Vasya', age: 33}}/>
    //       <C04 />
    //       <br />
    //       <br />
    //       <br />
    //       <br />
    //       <br />
    //       <br />
    //       <C04v2 />
    //       <Dropdown>
    //         Sample text
    //       </Dropdown>
    //       <Dropdown>
    //         <C04v2 />
    //       </Dropdown>
    //       <Dropdown>
    //         <C03 text='123123' color='red' user={{name: 'vasya', age: 33}}/>
    //         <C03v1 text='123123' color='red' user={{name: 'Vasya', age: 33}}/>
    //       </Dropdown>
    //       <List items={["Apple", "Orange", "Banana"]}/>
    //     </Fragment>
        
    //   )
    // }