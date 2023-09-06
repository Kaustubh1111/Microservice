import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const handleOnChange = (event)=> {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const [text, setText] = useState('Enter text here');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
                <button className="btn btn-primary my-2" onClick={handleUpClick} >Convert to Uppercase</button>
            </div>
        </div>
    )
}

TextForm.prototypes = {
    heading : PropTypes.string.isRequired
}