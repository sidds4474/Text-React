import React,{useState} from 'react'

export default function About() {

  const [myStyle,setMyStyle]=useState({

      // light-theme
      // default state of accordion color
      color:'black', //text-color
      backgroundColor:'white'
  })

  // Light
  const [btntext, setBtnText]=useState('Enable Dark Mode')

    const btnClick=()=>{
      if(myStyle.backgroundColor === 'white'){ //text-color

        setMyStyle({
          color:'white', //text-color
          backgroundColor:'black',
          border: '1px solid white'
        })
        setBtnText('Enable Light Mode')
      }
      else{
        //console.log("dark mode")
        setMyStyle({
          color:'black',
          backgroundColor:'white',
          border: '1px solid black'
        })
        setBtnText('Enable Dark Mode')
      }
    }



  return (


    <>
    <div className="container my-5" style={myStyle}>

      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>

    <div className='container my-3'>
      <button onClick={btnClick} className='btn btn-primary'>{btntext}</button>
    </div>
    </>
  )
}
