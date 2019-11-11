import React from 'react'


class C04 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter1: 0,
            counter2: 10
        }
        this.incrementCounterByOne = this.incrementCounterByOne.bind(this)
        this.incrementCounterByTwo = this.incrementCounterByTwo.bind(this)
    }
    componentDidMount() {
        console.log("C04 - did mount")
    }
    
    componentWillUnmount() {
        
        console.log("C04 - will unmount")
    }
    
    componentDidUpdate() {
        console.log("C04 - did update")

    }

    incrementCounterByOne() {
        console.log("c04a - before", this.state.counter1)
        this.setState((prevState) => {
            console.log(prevState)
            return {
                counter1: this.state.counter1 + 1
            }
        },
        () => {
            console.log("c04a - after", this.state.counter1)
        }
        )
        console.log("c04a - after", this.state.counter1)
    }

    incrementCounterByTwo() {
        this.setState({counter2: this.state.counter2 + 2})
    }
    
    render() {
        return (
            <>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div>Count: {this.state.counter1} <button onClick={this.incrementCounterByOne}>Increment by One</button></div>
                <div>Count: {this.state.counter2} <button onClick={this.incrementCounterByTwo}>Increment by Two</button></div>
            </>
        )
    }
}


export default C04