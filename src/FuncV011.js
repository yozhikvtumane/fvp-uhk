import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export default class C03v1 extends Component {
    // constructor(props) {
    //     super(props)
    // }
    getNow() {
        const date = new Date()
        return date.toUTCString()
    }

    getUserDescription() {
        return <strong>{this.props.user.name}: {this.props.user.age}</strong>
    }

    render() {
        return (
            <div style={{color: this.props.color}}>
                Hello World from {this.props.text} to {this.getUserDescription()}. Time now: {this.getNow()} 
            </div>
        )
    }
}

// FuncV01.propTypes = {
//     text: PropTypes.string.isRequired,
//     number: PropTypes.number
// }

C03v1.propTypes = {
    text: PropTypes.string,
    color : PropTypes.string,
    user: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    })
}
