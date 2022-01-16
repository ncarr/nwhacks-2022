import React, { useState } from 'react'

export default function QuestionEditor() {

    const [value, setValue] = useState("")
    const [isCorrect, setIsCorrect] = useState(false)

    const handleInputChange = (value: React.SetStateAction<string>) => {
        setValue(value);
    }

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