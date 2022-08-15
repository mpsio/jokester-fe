import React, { useContext } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
// custom components: 
import LayoutMain from './components/layout/LayoutMain';
import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';
import NotFound from './pages/NotFound';
import LayoutFullscreen from './components/layout/LayoutFullscreen';
import Home from './pages/Home';
// css
import './App.scss';
import JokeContext from './store/joke-context';

function App() {
  
  // Initial State
  // use state -- initial state management: 
  // const [appLoading, setAppLoading] = useState(true);
  // const [joke, setJoke] = useState<any>(null);
  // const [showPunchline, setShowPunchline] = useState(false);
  // const [error, setError] = useState(null);
  const jokeCtx = useContext(JokeContext);

  // Revised State Management: 
  // const initialState = {
  //   appLoading: true,
  //   joke : null,
  //   showPunchline : false,
  //   error: null
  // }
  // const jokeReducer = (state, action ) => {
  //   if(action.type === "APP_LOADING")
  //   {
  //     return {
  //       ...state,
  //       appLoading : action.payload.value
  //     }
  //   }
  //   if(action.type === "SET_JOKE")
  //   {
  //     return {
  //       ...state,
  //       joke : action.payload.value
  //     }
  //   }
  //   if(action.type === "TOGGLE_PUNCHLINE")
  //   {
  //     return {
  //       ...state,
  //       showPunchline : action.payload.value
  //     }
  //   }
  //   if(action.type=== "ERROR")
  //   {
  //     return {
  //       ...state,
  //       error : action.payload.value
  //     }
  //   }
  //   return state;
  // }
  // const [jokeState, jokeDispatch] = useReducer(jokeReducer, initialState);
  // const reset = () => 
  // {
  //   // setAppLoading(true);
  //   // setShowPunchline(!setShowPunchline);
  //   jokeDispatch({type : "APP_LOADING", payload: {value: true}});
  //   jokeDispatch({type : "TOGGLE_PUNCHLINE", payload: {value: false}});
  // }

  // // Functionality
  // const onGetJokeHandler = () => {
  //   reset();
  //   fetch("https://karljoke.herokuapp.com/jokes/random")
  //   .then(res=>{
  
  //     if(res.ok === false )
  //     {
  //       throw new Error("Well this isn't funny... No jokes available right now.");
  //     }
  //     return res.json();
  //   })
  //   .then(data=>{
  //     //setJoke(data);
  //     jokeDispatch({type : "SET_JOKE", payload: {value: data}});
  //   })
  //   .catch(err=>{
  //     // setError(err.message)
  //     jokeDispatch({type : "ERROR", payload: {value: err.message}});
  //   })
  //   jokeDispatch({type : "APP_LOADING", payload: {value: false}});
  // }

  // const onShowPunchlineHandler = () =>{
  //   // setShowPunchline((prevState)=>{return !prevState})
  //   jokeDispatch({type : "TOGGLE_PUNCHLINE", payload: {value: !jokeState.showPunchline}});
  // }
  // // Initial Load, no dependencies. 
  // useEffect(() => {
  //   setTimeout(()=>{
  //     onGetJokeHandler();
  //   }, 1000)
  // }, [])
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" /> 
        </Route>
        <Route path="/home">
          { jokeCtx.appLoading  && (
            <LayoutFullscreen>
              <Loading/>
            </LayoutFullscreen>
          ) }
          { jokeCtx.appLoading === false && jokeCtx.error !== null && <LayoutMain><ErrorMessage error={jokeCtx.error}/></LayoutMain> }
          { jokeCtx.appLoading === false && jokeCtx.error === null && <React.Fragment>
              <Home />
          </React.Fragment> }
        </Route>
        <Route path="*">
          <LayoutMain>
            <NotFound/>
          </LayoutMain>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
