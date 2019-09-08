import React from 'react';
import './App.css';
import Titles from './titles';
import Form from './form';
import Weather from './weather';


class App extends React.Component {
    render(){
        return(
            <div>
                <Titles />
                <Form />
                <Weather/>
            </div>
        )
    }
}

export default App;