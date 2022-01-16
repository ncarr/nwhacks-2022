import React from "react";
import { useState } from "react"

function QuestionEditor({ value, setValue, index, isCorrect }) {

    return (
        <form>
            <br />
            <label>
                <label>Answer:
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value, isCorrect, index)}
                    />
                    <input
                        type="checkbox"
                        id="topping"
                        name="topping"
                        value="Correct Answer?"
                        // checked={!isCorrect}
                        onChange={() => setValue(value, !isCorrect, index)}
                    />
                    Correct Answer
                </label>

            </label>
        </form>
    );

}

export default function QuestionEditorList() {
    const [questions, setQuestions] = React.useState([
        { value: "", isCorrect: false },
        { value: "", isCorrect: false },
        { value: "", isCorrect: false }
    ]);

    const addQuestion = () => {
        const newQuestions = [...questions, { value: "", isCorrect: false }];
        setQuestions(newQuestions);
    }

    const removeQuestion = index => {
        const newQuestions = [...questions];
        newQuestions.splice(index, 1);
        setQuestions(newQuestions);
    }

    const handleSubmit = (questions: ((key: any, index: any) => JSX.Element)[]) => {
        console.log('An answer was submitted: ', questions);
    }

    const setValue = (value, isCorrect, index) => {
        setQuestions(questions.map((question, idx) => {
            if (idx === index) {
                return { ...question, value, isCorrect };
            }
            else {
                return question;
            }
        }))
    }

    return (
        <div className="app">
            <div className="todo-list">
                {questions.map((question, index) => (
                    <QuestionEditor
                        key={index}
                        index={index}
                        value={question.value}
                        setValue={setValue}
                        isCorrect={question.isCorrect}
                    />
                ))}
                <button className="question-add-button" onClick={() => addQuestion()}>ADD</button>
                <button className="question-add-button" onClick={() => removeQuestion(questions.length - 1)}>x</button>
                <button className="answer-button" onClick={() => handleSubmit(questions)}>Submit</button>
            </div>
        </div>
    );
}
