import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export default function FuncV01(props) {
    return (
        <div style={{color: props.color}}>Hello world from Function! PropTypesTest: {props.text} , {props.number}</div>
    )
}

export class C03 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{color: this.props.color}}>
                Hello World from {this.props.text} to {this.props.user.name}
            </div>
        )
    }
}

FuncV01.propTypes = {
    text: PropTypes.string.isRequired,
    number: PropTypes.number
}

C03.propTypes = {
    text: PropTypes.string,
    color : PropTypes.string,
    user: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    })
}
