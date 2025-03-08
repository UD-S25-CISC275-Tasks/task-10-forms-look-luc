import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>();

    function updateColors(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColors}
                label={<span style={{ backgroundColor: "Red" }}>Red</span>}
                value="red"
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColors}
                label={<span style={{ backgroundColor: "Blue" }}>Blue</span>}
                value="blue"
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColors}
                label={<span style={{ backgroundColor: "Green" }}>Green</span>}
                value="green"
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColors}
                label={
                    <span style={{ backgroundColor: "Orange" }}>Orange</span>
                }
                value="orange"
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColors}
                label={
                    <span style={{ backgroundColor: "Purple" }}>Purple</span>
                }
                value="purple"
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColors}
                label={<span style={{ backgroundColor: "Cyan" }}>Cyan</span>}
                value="cyan"
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColors}
                label={
                    <span style={{ backgroundColor: "Magenta" }}>Magenta</span>
                }
                value="magenta"
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColors}
                label={<span style={{ backgroundColor: "white" }}>White</span>}
                value="white"
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColors}
                label={<span style={{ backgroundColor: "Black" }}>Black</span>}
                value="black"
            />
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                You have chosen {color}.
            </div>
        </div>
    );
}
