import React, {useContext, useEffect, useState} from 'react';
import './Header.scss';
import {Link, useLocation} from 'react-router-dom';

import { Button } from 'antd';
import {MenuOutlined} from '@ant-design/icons'
import JokeContext from '../../store/joke-context';

const Header = (props) => {
    const [toggleMenu, setToggleMenu] = useState(true);
    const [homePage, setHomePage] = useState(false);
    const location = useLocation();
    const jokeCtx = useContext(JokeContext);

    const toggleMenuHandler = () => 
    {
        setToggleMenu((prevState)=>!prevState);
    }
    useEffect(()=>{
       const onHomePage = location.pathname === "/home" ? true : false;
       setHomePage((prevState)=>{return onHomePage});
    },[location])
    return (
        <header className='header'>
            <div className="header__nav">
                <div className="header__nav__logo">
                    <Link to="/home">
                        Jokester
                    </Link>
                </div>
                {toggleMenu && (
                    <ul className="nav-items">
                         <li>
                             <a href="https://karljoke.herokuapp.com/" target="_blank" rel="no-opener">API Docs</a>
                         </li>
                         <li>
                             <Link to="some-bad-route">Bad Route</Link>
                         </li>
                     </ul>
                )}
            </div>
            <div className="header__actions">
                {toggleMenu && homePage && (<React.Fragment>
                    <Button onClick={jokeCtx.onGetJoke} type="primary">Get Random Joke</Button>
                    <Button onClick={jokeCtx.onShowPunchline}>{jokeCtx.showPunchline ? "Hide" : "Show"} Punchline</Button>
                </React.Fragment>)}
                <div className="header__actions__icon">
                    <MenuOutlined onClick={toggleMenuHandler}/>
                </div>
            </div>
        </header>
    )
}
export default Header;