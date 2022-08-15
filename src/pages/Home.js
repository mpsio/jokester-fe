import React, {useContext} from 'react';
import './Home.scss';
import LayoutMain from '../components/layout/LayoutMain';
import Joke from '../components/Joke';
import JokeContext from '../store/joke-context';
import RotatingCard from '../components/ui/RotatingCard';
const Home = (props) => {
    const jokeCtx = useContext(JokeContext);
    return (
        <div className="home">
            <LayoutMain>
             <div className="home__heading">
                        {jokeCtx.showPunchline ? "Punchline:" : "Joke:" }
                    </div>
                    <RotatingCard frontText={jokeCtx.joke?.setup} backText={jokeCtx.joke?.punchline} keepFlipped={jokeCtx?.showPunchline}/>
                    {/* <Joke showPunchline={jokeCtx.showPunchline} joke={jokeCtx.joke}/>   */}
            </LayoutMain>
        </div>
    )
}
export default Home;