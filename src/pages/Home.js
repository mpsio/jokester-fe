import React, {useContext} from 'react';
import './Home.scss';
import LayoutMain from '../components/layout/LayoutMain';
import Joke from '../components/Joke';
import JokeContext from '../store/joke-context';
const Home = (props) => {
    const jokeCtx = useContext(JokeContext);
    return (
        <div className="home">
            <LayoutMain>
                <Joke showPunchline={jokeCtx.showPunchline} joke={jokeCtx.joke}/>  
            </LayoutMain>
        </div>
    )
}
export default Home;