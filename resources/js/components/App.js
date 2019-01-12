import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CircleAnswers from './CircleAnswers'

class App extends Component {
    render () {
        return (
            <div>
                <h1>Hello world</h1>
                <CircleAnswers />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))