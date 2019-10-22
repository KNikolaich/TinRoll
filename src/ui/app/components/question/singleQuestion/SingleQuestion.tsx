import React, { useState, useEffect } from 'react'
import '@babel/polyfill'

import './single.css'
import { RouteComponentProps } from 'react-router';
import CreateAnswer from '../../answer/createAnswer';

const SingleQuestion = (props: RouteComponentProps<SingleQuestionProps>) => {
    const [question, setQuestion] = useState<QuestionDto | null>();
    const [questionId, _] = useState<number>(parseInt(props.match.params.id));


    async function fetchQuestion() {
        const res = await fetch(`http://localhost:5000/api/questions/${questionId}`); //TODO: extract to some environmental variable
        res
            .json()
            .then(res => setQuestion(res))
    }

    useEffect(() => {
        fetchQuestion();
    }, []);

    return (
        <div className='t-single-question'>
            {
                question == null &&
                <h2>Loading...</h2>
            }
            {
                question != null &&
                <div id="question-box">
                    <div className='t-s-q-question'>
                        <h2>{question.title}</h2>
                        <p>{question.content}</p>
                    </div>
                    <CreateAnswer
                        questionId={questionId} />
                </div>
            }
        </div>
    )
};
export default SingleQuestion;