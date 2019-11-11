import React from 'react'


class C04v2 extends React.Component {
    constructor(props) {
        super(props)
        const time = new Date().toUTCString()
        this.state = {
            time: time
        }
    }

    componentDidMount() {
        console.log("C04v2 - did mount")
        this._timer = setInterval(() => {
            const time = new Date().toUTCString()
            // console.dir(time)
            this.setState({
                time: time
            })
        }, 1000)
    }
    
    componentWillUnmount() {
        console.log("C04v2 - will unmount")
        clearInterval(this._timer)
    }

    
    render() {
        return (
            <>
                <div>Time: {this.state.time}</div>
            </>
        )
    }
}


export default C04v2