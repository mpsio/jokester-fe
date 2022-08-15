import React from 'react';
import './Joke.scss';
const Joke = (props) => {
    return (
        <div className="joke">
            <span className="joke__setup">{props.joke?.setup}</span>
            {props.showPunchline && <span className="joke__punchline">{props.joke?.punchline}</span> }
        </div>
    )
}
export default Joke;