import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [curr, setCurr] = useState<string>(options[0]);

    function updateCurr(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurr(event.target.value);
    }

    function checkCurr() {
        if (curr === expectedAnswer) {
            return <span>✔️</span>;
        } else {
            return <span>❌</span>;
        }
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userEmotions">
                <Form.Label>How do you feel?</Form.Label>
                <Form.Select value={curr} onChange={updateCurr}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{checkCurr()}</div>
        </div>
    );
}
