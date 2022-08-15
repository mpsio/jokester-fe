import React from 'react';
import './Joke.scss';
type Joke = {
    id : number, 
    setup: string, 
    punchline : string
}
interface JokeProps {
    joke : Joke,
    showPunchline : boolean,
}
const Joke : React.FC<JokeProps> = (props ) => {
    return (
        <div className="joke">
            <span className="joke__setup">{props.joke?.setup}</span>
            {props.showPunchline && <span className="joke__punchline">{props.joke?.punchline}</span> }
        </div>
    )
}
export default Joke;