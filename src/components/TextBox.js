import React, {useState} from 'react'

// hooks


//setText(new value)

//Component TextBox prop
export default function TextBox(props) {


  const [text,setText] = useState('Enter the text')

  const handleUpClick=()=>{
      //console.log("Onclick was clicked")
       let newText=text.toUpperCase()
       setText(newText) 
       props.showAlert('Converted !!')

  }

  const handleLoClick=()=>{
    //console.log("Onclick was clicked")
     let newText=text.toLowerCase()
     setText(newText) 
     props.showAlert("Converted !!")

}
 const handleCopyClick=()=>{
  //console.log("Onclick was clicked")
   let text=document.getElementById('box')
   text.select()
   navigator.clipboard.writeText(text.value)
   props.showAlert('Copied !!')

}
const handleClearClick=()=>{
    setText('')
    props.showAlert('Cleared !!')
}

  const handleOnChange=(event)=>{
    //console.log("Onchange was clicked")
    setText(event.target.value)  

}
// Clear Text ---- Clear- Assignment - 5 min

  return (
  <>
  <div className='container' style ={{  marginTop:'50px',color: props.mode==='dark' ? 'white':'black'}} > 
    <h2>{props.heading}</h2>
    <div className="mb-5">
    <textarea className="form-control" value={text} onChange={handleOnChange}id="box" rows="8" style ={{backgroundColor:props.mode==='dark' ? 'grey':'white'}}></textarea>
  </div>
  <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
  <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
  <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  <button type="button" className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>  
  </div>


  <div className='container'style ={{ marginTop:'50px',color: props.mode==='dark' ? 'white':'black'}} > 
      <h2> Input Information </h2>
       <h4>{text.split(" ").length} words and {text.length} characters </h4> 
       <h4> Time to read - {(0.008 * text.split(" ").length)} Minutes Read </h4>
    </div>
  </>
  )
}
