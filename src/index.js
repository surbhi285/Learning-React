import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import HelloComponent from './HelloComponent';
// import reportWebVitals from './reportWebVitals';
// import IncrementDecrement from './IncrementDecrementCounter/IncrementDecrement';
import App from './App';
import BasicReduxFunctionApp from './Redux/BasicRedux/BasicReduxFunctionApp';
import basicReduxstore from './Redux/BasicRedux/store/Store';
import { Provider } from 'react-redux';
import ExampleComponent from './Redux/BasicRedux/ExapmleComponent';
import CounterRedux from './Redux/Redux-ToolKit/ReduxCounter/ReduxCounter';
import bigStore, { CounterSlice } from './Redux/Redux-ToolKit/ReduxCounter/Store/Store';
import gitHubStore from './Redux/GithubUser/store/gitHubStore';
import GitHubComponent from './Redux/GithubUser/gitHubUserComponent';
import gitApiStore from './Redux/GitApiCall/Store/GitApiStore';
import GitApiComponent from './Redux/GitApiCall/GitApiComponent';
// import RouteApp from './RouteApp/RouteApp';
// import { BrowserRouter } from 'react-router-dom';
// import { ChakraProvider } from '@chakra-ui/react';
// import ByeComponent from './ByeComponent';
// import IncDecComponent from './classComponentIntro/IncDecComponent'
// import Hello from './classComponentIntro/IncDecComponent';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HelloComponent name={"Surbhi"} standard={"10"}/> */}
    {/* <ByeComponent />
    <IncrementDecrement /> */}
    {/* <App /> */}
    {/* <Hello /> */}
    {/* <MultipleState /> */}
    
{/* 
    <BrowserRouter>
    <ChakraProvider>
    <RouteApp />
    </ChakraProvider>
    </BrowserRouter> */}


    {/* -----------------Redux--------------- */}


    {/* <Provider store={basicReduxstore()}> 
    <BasicReduxFunctionApp />
    <ExampleComponent />
    </Provider> */}

    {/* <Provider store={bigStore}>
     <CounterRedux />
    </Provider> */}

{/* 
    <Provider store={gitHubStore()}>
      <GitHubComponent />
    </Provider> */}

    <Provider store={gitApiStore()}>
      <GitApiComponent />
    </Provider>
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
