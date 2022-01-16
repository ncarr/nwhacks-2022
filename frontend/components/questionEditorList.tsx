import React from "react";
import { useState } from "react"

function QuestionTextEditor({ value, setValue }) {

    return (
        <form>
            <br />
            <label>
                <label>Question: 
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </label>
            </label>
        </form>
    );

}

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

export default function QuestionEditorList({onChange}) {
    if(!onChange){
        onChange = (() => {});
    }
    const [questionText, setQuestionText] = React.useState("");

    const [questions, setQuestions] = React.useState([
        { value: "", isCorrect: false },
        { value: "", isCorrect: false },
        { value: "", isCorrect: false }
    ]);

    const addQuestion = () => {
        const newQuestions = [...questions, { value: "", isCorrect: false }];
        setQuestions(newQuestions);
        onChange({questionText, questions});
    }

    const removeQuestion = index => {
        const newQuestions = [...questions];
        newQuestions.splice(index, 1);
        setQuestions(newQuestions);
        onChange({questionText, questions});
    }

    const handleSubmit = (questionText ,questions: ((key: any, index: any) => JSX.Element)[]) => {
        console.log('An answer was submitted: ', questionText, questions);
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
        onChange({questionText, questions});
    }

    const setQuestionValue = (value) => {
        setQuestionText(value);
        onChange({questionText, questions});
    }

    return (
        <div className="question-box">
            <div>
                <QuestionTextEditor 
                    value={questionText}
                    setValue={setQuestionValue}
                />
            </div>
            <div className="questions-list">
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
                <button className="question-add-button" onClick={() => handleSubmit(questionText, questions)}>Submit</button>
            </div>
        </div>
    );
}
