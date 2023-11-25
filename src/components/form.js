import React , {useState} from 'react'
// import PropTypes from 'prop-types'

export default function FormText(props){
    const [text, setText] = useState("");

    let handleonupper = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("success", "Text has changed to Upper Case");
    }
    let handleonlower = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success", "Text has changed to Lower Case");
    }
    let handleonchange = (event) => {
        setText(event.target.value);
    }
    let handletoremove = () => {
        setText("");
    }
    let handlecopy = () => {
        let texting = document.querySelector("#texting");
        texting.select();
        navigator.clipboard.writeText(texting.value);
        props.showAlert("success", "Text has been copied");
    }
    return(
        <>
        <h2 className='mb-3' style={{ color : props.mode==='primary'?'black':'white'}}>{props.title}</h2>
        <textarea cols="30" rows="7" id='texting' className='form-control mb-3' placeholder='Enter Text...' onChange={handleonchange} value={text}></textarea>
       <div className="col-3"> <button className='btn btn-primary mt-2' onClick={handleonupper}>Convert to Uppercase</button> </div>
       <div className="col-3"> <button className='btn btn-primary mt-2' onClick={handleonlower}>Convert to LowerCase</button></div>
        <div className="col-3"><button className='btn btn-primary mt-2' onClick={handletoremove}>Clear Text</button></div>
        <div className="col-3"><button className='btn btn-primary mt-2' onClick={handlecopy}>Copy Text</button></div>
        <div className={`col-12 mt-4 text-${props.mode === 'primary'? 'dark' : 'white'}`}><h2>Text Summary</h2>
            <p className='mt-2'>{text.split(" ").length === 0? 0: text.split(" ").length } Words {text.length} Character{text.length>1?'s':''}</p>
        </div>
        <div className={`col-12 mt-2 text-${props.mode === 'primary'? 'dark' : 'white'}`}><h2>Preview</h2>
            <p className='mt-2'>{text.length>0? text : "Enter Text in the Textarea above to Preview"}</p>
        </div>
    </>
    );
}