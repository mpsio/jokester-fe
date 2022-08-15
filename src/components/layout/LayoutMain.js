import React from 'react';
import './LayoutMain.scss';
import Header from '../ui/Header'
import Footer from '../ui/Footer'
const LayoutMain = (props) => {
    return (
        <React.Fragment>
            <Header 
            onGetJoke={props.onGetJoke} 
            onShowPunchline={props.onShowPunchline} 
            showPunchline={props.showPunchline}
            />
            <main className="layout-main">
                <div class="layout-main__container">
                    {props.children}
                </div>
            </main>
            <Footer>
                Jokester &copy; 2022
            </Footer>
        </React.Fragment>
    )
}
export default LayoutMain;