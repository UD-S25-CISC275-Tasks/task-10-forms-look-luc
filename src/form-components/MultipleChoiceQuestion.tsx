import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [curr, setCurr] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
        </div>
    );
}
