import React, { useState } from 'react'
import copy from "copy-to-clipboard";
// import { confirmAlert } from 'react-confirm-alert';
// import paste from "paste-to-clipboard";



export default function Form(props) {
    const [text, setText] = useState('Enter Your Text ');



    const HanddleOnChange = (event) => {
        // console.log("onchange");
        setText(event.target.value)
    }

    const upCase = () => {
        //console.log("click ");
        // setText("you have click on upper case button");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Convert to Upper Case", "success");

        if (text.length === 0) {
            props.showAlert(" Text is Empty", "danger")
        }


    }

    const lowCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Convert to Lower Case", "success");
        if (text.length === 0) {
            props.showAlert("Text is Empty", "danger")
        }
    }


    const clear = () => {

        setText(document.getElementById("inputBox").innerHTML = "");
        //setText("");  //another way
        // alert(`You Really want to clear Screen`);
        props.showAlert("Clear all Text", "success");
        if (text.length === 0) {
            props.showAlert("Text is Empty","danger")
        }

    }


    const copyToClipBoard = () => {

        let cpy = document.getElementById("inputBox");
        cpy.select();
        navigator.clipboard.writeText(cpy.value);
        document.getSelection().removeAllRanges();
        //copy(text);       //another way
        // alert(`Successfully Copy on Clip-Board`);
        props.showAlert("Text has been Copy to Clipboard", "success");
        if (text.length === 0) {
            props.showAlert("Text is Empty", "danger")
        }

    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Remove all Extra Spacess from the Text", "success");
        if (text.length === 0) {
            props.showAlert("Text is Empty", "danger")
        }

    }
  

    return (
        <div>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'} my-3`}>
                <h1 className={`container text-${props.mode === 'light' ? 'dark' : 'light'}  center my-3 `}  > {props.heading}</h1>
                <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(154 159 184)', color: props.mode === 'light' ? 'dark' : 'light' }} id="inputBox" rows="9" column="5" value={text} onChange={HanddleOnChange}></textarea>
                <button className=" btn-primary my-22 mx-1" onClick={upCase}>convert to UpperCase</button>
                <button className=" btn-primary my-2 mx-1" onClick={lowCase}>convert to LowerCase</button>
                <button className=" btn-primary my-2 mx-1" onClick={clear}>Clear</button>
                <button className=" btn-primary my-2 mx-1 " onClick={copyToClipBoard}>Copy</button>
            
                <button disabled = {text.length === 0} className=" btn-primary my-2 mx-1 " onClick={removeExtraSpaces}>Remove Extra Spaces</button>

                {/* <button className=" btn-primary my-3  " onClick={pasteToClipBoard}>Paste</button> */}

            </div>
            <div className={`container text-${props.mode === 'dark' ? 'light' : 'body'} `} >

                <h4>Word Present On Your Document </h4>
                <h6><i> {text.split(" ").filter((elm) => { return elm.length !== 0 }).length}</i> Words and <i> {text.length} </i>Character</h6>
                <h6><b>{(0.008) * text.split(" ").filter((element) => { return element.length !== 0 }).length
                } </b>Time Required to Read all Document</h6>
                <h3>Preview</h3>
                <p>{text}</p>


            </div>
        </div>
    )
}



