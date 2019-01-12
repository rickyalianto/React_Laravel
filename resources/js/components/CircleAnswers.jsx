import React, { Component } from 'react';
import CircleAnswer from './CircleAnswer'

class CircleAnswers extends Component {
    constructor () {
        super();
        this.state = {
            questions: 
                { id: 1, 
                  value: 'Skin color?',
                  answers: [
                      { id: 1, value: 'Fair', checked: 0 },
                      { id: 2, value: 'Light', checked: 0 },
                      { id: 3, value: 'Medium', checked: 0 },
                      { id: 4, value: 'Tan', checked: 0 },
                  ]  
                }
        }
        this.handleChecked = this.handleChecked.bind(this);
    }

    handleChecked(answerId) {
        let answers = this.state.questions.answers;
        for(var i = 0; i < answers.length; i++) {
            if(answers[i].id === answerId) answers[i].checked = !answers[i].checked;
            else answers[i].checked = 0;
        }
        this.setState({ answer: answers });
        console.log(this.state);
    }

    render() { 
        return ( 
            <div>
                {this.state.questions.answers.map(answer => (
                    <CircleAnswer 
                        key={answer.id}
                        answers={answer} 
                        onChecked={this.handleChecked}             
                    />
                ))}
            </div>
        );
    }
}
 
export default CircleAnswers;