import React, { useState, FormEvent } from 'react'
import TextField from '@material-ui/core/TextField';
import { RouteComponentProps } from 'react-router';

const CreateAnswer = (props: CreateAnswerProps) => {
    const [answer, setAnswer] = useState<string | null>();
    const [questionId, _] = useState<number>(props.questionId);
    async function submitAnswer(event: FormEvent) {
        event.preventDefault();
        console.log("Answer: " + answer);
        let data: CreateAnswerDto = {questionId: questionId, content: answer!, userId: 1}
        console.log(data);
        let endpoint = "http://localhost:5000/api/answers";
        return fetch(endpoint, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            return response
        });
    }
    return (
        <form onSubmit={submitAnswer}>
            <TextField
                id="create-answer"
                variant="outlined"
                multiline
                fullWidth
                rows="10"
                rowsMax="20"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
            />
            <input type="submit" value="Submit" />
        </form>
    )
};
export default CreateAnswer;