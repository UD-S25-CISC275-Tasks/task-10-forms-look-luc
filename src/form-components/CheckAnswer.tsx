import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAns, setGivenAns] = useState<string>("");

    function cheking() {
        if (givenAns === expectedAnswer) {
            return <p>✔️</p>;
        } else {
            return <p>❌</p>;
        }
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="Answer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    type="string"
                    value={givenAns}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setGivenAns(event.target.value);
                    }}
                ></Form.Control>
            </Form.Group>
            <div>{cheking()}</div>
        </div>
    );
}
