import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component
{
    constructor(props)
    {
        super(props)
        var state = {incorrectAnswer: false};
        this.state = state;
    }
    handleClick(buttonText)
    {
        var answeredCorrectly = buttonText == this.props.quiz_question.answer;
        
        if(answeredCorrectly)
            this.props.showNextQuestionHandler();

        this.state.incorrectAnswer = !answeredCorrectly;
    }
    render()
    {
        return <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
              {this.props.quiz_question.answer_options.map((answer, index) => <QuizQuestionButton button_text={answer} key={index} clickHandler={this.handleClick.bind(this)}></QuizQuestionButton>)}
          </ul>
        </section>
        {this.state.incorrectAnswer ? <div className='error'>Sorry, that's not right.</div> : null}
      </main>
    }
}
export default QuizQuestion