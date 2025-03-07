import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [gain, setGain] = useState<number>(0);
    function parser(event: React.ChangeEvent<HTMLInputElement>) {
        let num: number = parseFloat(event.target.value);
        if (!isNaN(num)) {
            setGain(num);
        }
    }
    function handleGain() {
        setAttempts((prevAttempts) => prevAttempts + gain);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formAttempts">
                <Form.Label>Number of Attempts Requested</Form.Label>
                <Form.Control
                    type="number"
                    value={gain}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        parser(event);
                    }}
                ></Form.Control>
            </Form.Group>
            <div>Attempts left: {attempts}</div>
            <div>
                <Button
                    onClick={() => {
                        setAttempts((prevAttempts) => prevAttempts - 1);
                    }}
                    disabled={attempts === 0}
                >
                    use
                </Button>
                <Button
                    onClick={() => {
                        handleGain();
                    }}
                >
                    gain
                </Button>
            </div>
        </div>
    );
}
