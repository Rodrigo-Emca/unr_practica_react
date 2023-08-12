import React from 'react'

export default class ButtonClick extends React.Component {
    handleClick = () => {
        alert('¡Has hecho click en el botón!')
    }

    render() {
        return <button onClick={this.handleClick}>Haz click aquí</button>
    }
}
