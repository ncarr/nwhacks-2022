import React, { useState } from 'react'

export default function Question() {
    const questions = 
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        }
    
    const [showCorrect, setShowCorrect] = useState(false);
    const [correct, setCorrect] = useState(false);

    const handleAnswerOptionClick = (isCorrect) => {
        if(isCorrect){
            setCorrect(true);
        }
        setShowCorrect(true);
    };

    return (
        <div className="question-box">
            {showCorrect ? (
                <div className='score-section'>
                    {correct ? ("Correct") : ("Wrong")}
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question</span>
                            <p>{questions.questionText}</p>
                        </div>
                    </div>
                    <div className='answer-section'>
                        {questions.answerOptions.map((answerOption) => (
                            <button className="answer-button" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

