import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class List extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let items = this.props.items.map((item, i)=>{
            return <li key={item}>{item}</li>
        })

        return (
            <ol>
                {items}
            </ol>
        )
    }
}

export default List

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
}