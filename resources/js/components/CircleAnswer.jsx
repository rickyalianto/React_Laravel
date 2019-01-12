import React, { Component } from 'react';

class CircleAnswer extends Component {
    render() { 
        return ( 
            <div>
                <div className="answer-container">
                    <div className="answer-circle" onClick={() => this.props.onChecked(this.props.answers.id)}>
                        {this.isChecked()}
                    </div>
                    <p>{this.props.answers.value}</p>
                </div>
            </div>
        );
    }

    isChecked() {
        if(this.props.answers.checked) 
            return <div className="check-mark"></div>
        return ''
    }
}
 
export default CircleAnswer;