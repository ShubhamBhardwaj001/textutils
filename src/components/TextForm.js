import React, {useState} from 'react'


export default function (props) {
    const handleUpClick = ()=>{//whenever someone click on button this function will start.
        console.log("Uppercse was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{//whenever someone click on button this function will start.
       // console.log("Uppercse was clicked");
        let newText = text.tolowerCase();
        setText(newText)
    }
    const handleclearClick = ()=>{//whenever someone click on button this function will start.
       // console.log("Uppercse was clicked");
        let newText = "";
        setText(newText)
    }
    const handlereverseClick = ()=>{//whenever someone click on button this function will start.
       // console.log("Uppercse was clicked");
        let newText = text.split("").reverse().join("");
        setText(newText)
    }
    const handlecopyClick = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }
    const handleOnChange = (event)=>{
        console.log("onChange");
        setText(event.target.value);// because of this now we can write on the form box also .If we want to add something with the setText. it is settext+our text.
    }
    const [text, setText] = useState("Enter the text"); // helps in changing variables value.
   // setText("now this text will be shown inside the form box");// this way we will change the state
    return (
        <>
        <div>
            <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div className="mb-3">
  <label for="myBox" className="form-label">Example textarea</label>
  <textarea  className="form-control" value = {text}  onChange = {handleOnChange} id="myBox" rows="5"></textarea>
</div>
<button className="btn btn-primary my-3 mx-2" onClick = {handleUpClick}>Convert to upper case</button>
<button className="btn btn-primary my-3 mx-2" onClick = {handleLowClick}>Convert to lower case</button>
<button className="btn btn-primary my-3 mx-2" onClick = {handleclearClick}>Clear text</button>
<button className="btn btn-primary my-3 mx-2" onClick = {handlereverseClick}>Reverse text</button>
<button className="btn btn-primary my-3 mx-2" onClick = {handlecopyClick}>Copy text</button>
 <div className = "container mx-1"> 
 <h1>Your text summary </h1> 
  <p>{text.split(" ").length} words and{text.length} characters </p>
  <p>{0.008 * text.split(" ").length}Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
  </div> 
  
        </div>
        </>
    )
}

