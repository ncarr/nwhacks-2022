import React from "react";
import { useState } from "react"

function QuestionEditor() {

    const [value, setValue] = useState("")
    const [isCorrect, setIsCorrect] = useState(false)

    const handleOnChange = () => {
        setIsCorrect(!isCorrect);
    };

    const handleSubmit = (isCorrect: string | boolean, value: string) => {
        alert('A name was submitted: ' + value + isCorrect);
    }

    return (
        <form>
            <br />
            <label>
                <label>Answer:
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <input
                        type="checkbox"
                        id="topping"
                        name="topping"
                        value="Correct Answer?"
                        onChange={handleOnChange}
                    />
                    Correct Answer
                </label>

            </label>
            <button className="answer-button" onClick={() => handleSubmit(isCorrect, value)}>Submit</button>
        </form>
    );

}

export default function QuestionEditorList() {
    const [questions, setQuestions] = React.useState([
        (QuestionEditor),
        (QuestionEditor),
        (QuestionEditor)
    ]);

    const addQuestion = () => {
        const newQuestion = [...questions, {QuestionEditor}];
        setQuestions(newQuestion);
    }


    return (
        <div className="app">
            <div className="todo-list">
                {questions.map((question, index) => (
                    <QuestionEditor
                        key={index}
                        index={index}
                    />
                ))}
                <button className="question-add-button" onClick={() => addQuestion()}>YEET</button>
            </div>
        </div>
    );
}
