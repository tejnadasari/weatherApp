import React from 'react';
import './form-style.css';
const Form = (props) => {
    return(
        <form onSubmit = {props.handleForm} className = "title-format">
            <input type = "text" name = "city" placeholder = "City"/>
            <input type = "text" name = "country" placeholder = "Country"/>
            <input type = "submit" value = "Get Weather"/>
        </form>
    )
}

export default Form;