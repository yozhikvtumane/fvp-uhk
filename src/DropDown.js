import React from 'react'


class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            isOpen: false
        }
        this.switch = this.switch.bind(this)
    }

    switch() {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        let content;

        if (this.state.isOpen) {
            content = this.props.children
        }

        return (
            <>
                <div>Dropdown:
                    <section>
                        <button onClick={this.switch}>Show/Hide</button><br />
                        {content}
                    </section>
                </div>
            </>
        )
    }
}


export default Dropdown