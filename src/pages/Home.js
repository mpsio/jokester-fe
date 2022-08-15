import React from 'react';
import './Home.scss';
import LayoutMain from '../components/layout/LayoutMain';
import Joke from '../components/Joke';
const Home = (props) => {
    return (
        <div className="home">
            <LayoutMain
            onGetJoke={props.onGetJoke}
            onShowPunchline={props.onShowPunchline}
            joke={props.joke}
            showPunchline={props.showPunchline}>
                <Joke joke={props.joke}  
                showPunchline={props.showPunchline}/>
            </LayoutMain>
        </div>
    )
}
export default Home;