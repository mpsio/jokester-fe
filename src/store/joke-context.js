
import React, {useReducer, useEffect} from 'react';

const JokeContext = React.createContext({
    appLoading: true,
    joke : null,
    showPunchline : false,
    error: null,
    onGetJoke: ()=> {},
    onShowPunchline: ()=> {}
});

export const JokeContextProvider = (props) => {
      const initialState = {
        appLoading: true,
        joke : null,
        showPunchline : false,
        error: null
      }
      const jokeReducer = (state, action ) => {
        if(action.type === "APP_LOADING")
        {
          return {
            ...state,
            appLoading : action.payload.value
          }
        }
        if(action.type === "SET_JOKE")
        {
          return {
            ...state,
            joke : action.payload.value
          }
        }
        if(action.type === "TOGGLE_PUNCHLINE")
        {
          return {
            ...state,
            showPunchline : action.payload.value
          }
        }
        if(action.type=== "ERROR")
        {
          return {
            ...state,
            error : action.payload.value
          }
        }
        return state;
      }
      const [jokeState, jokeDispatch] = useReducer(jokeReducer, initialState);
      const reset = () => 
      {
        // setAppLoading(true);
        // setShowPunchline(!setShowPunchline);
        jokeDispatch({type : "APP_LOADING", payload: {value: true}});
        jokeDispatch({type : "TOGGLE_PUNCHLINE", payload: {value: false}});
      }
    
      // Functionality
      const onGetJokeHandler = () => {
        reset();
        // fetch("https://karljoke.herokuapp.com/jokes/random")
        fetch("http://localhost:3005/jokes/random")
        .then(res=>{
      
          if(res.ok === false )
          {
            throw new Error("Well this isn't funny... No jokes available right now.");
          }
          return res.json();
        })
        .then(data=>{
          //setJoke(data);
          jokeDispatch({type : "SET_JOKE", payload: {value: data}});
        })
        .catch(err=>{
          // setError(err.message)
          jokeDispatch({type : "ERROR", payload: {value: err.message}});
        })
        jokeDispatch({type : "APP_LOADING", payload: {value: false}});
      }
    
      const onShowPunchlineHandler = () =>{
        // setShowPunchline((prevState)=>{return !prevState})
        jokeDispatch({type : "TOGGLE_PUNCHLINE", payload: {value: !jokeState.showPunchline}});
      }
      // Initial Load, no dependencies. 
      useEffect(() => {
        setTimeout(()=>{
          onGetJokeHandler();
        }, 1000)
      }, []);
      const contextValue = {
        appLoading: jokeState.appLoading,
        joke : jokeState.joke,
        showPunchline : jokeState.showPunchline,
        error: jokeState.error,
        onGetJoke: onGetJokeHandler,
        onShowPunchline: onShowPunchlineHandler
      };
    return(
        <JokeContext.Provider value={contextValue}>{props.children}</JokeContext.Provider>
    );
}

export default JokeContext;
