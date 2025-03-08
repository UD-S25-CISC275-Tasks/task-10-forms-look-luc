import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                className="form-switch"
                type="checkbox"
                id="to-edit-mode"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />
            {/*{edit &&()} from ChatGPT*/}
            {editMode && (
                <Form.Check
                    type="checkbox"
                    id="student-check-is"
                    label="Is a Student"
                    name="student"
                    value="is a student"
                    checked={isStudent}
                    onChange={updateIsStudent}
                />
            )}
            {editMode && (
                <Form.Group controlId="formUserName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
            )}
            <div>
                {name} is {isStudent ? "a student" : "not a student"}
            </div>
        </div>
    );
}
