import React, {useState} from 'react'


export default function About(){
    const [myStyle, uStyle] = useState({
        color : 'black',
        background : 'white'
    });
    const [btnText, setBtnText] = useState("Enable Dark Mode?");
    let changetheme = () => {
        if(myStyle.color === 'white'){
            uStyle({
                color : 'black',
                background : 'white'
            })
            setBtnText("Enable Dark Mode?");
        }else{
            uStyle({
                color : 'white',
                background : 'black'
            })
            setBtnText("Enable Light Mode?");
        }
    }
    return(
        <>
         <div className="about-page" style={myStyle}>
      <h1>About Our Practice Website</h1>
      <p>Welcome to our practice website built with React.js! We are excited to share our journey in web development and showcase the skills we've been honing along the way.</p>

      <h2>Our Mission</h2>
      <p>At [Your Website Name], our mission is to create a platform that demonstrates the power and versatility of React.js. We aim to provide a learning resource for fellow developers while showcasing the potential of modern web technologies.</p>

      <h2>What We Offer</h2>
      <p>Explore various features and functionalities as you navigate through our website:</p>
      <ul>
        <li><strong>Responsive Design:</strong> Experience seamless navigation on devices of all sizes.</li>
        <li><strong>Interactive Components:</strong> Engage with React-powered interactive elements.</li>
        <li><strong>Learning Resources:</strong> Discover tutorials, articles, and tips on web development.</li>
        <li><strong>Practical Examples:</strong> View real-world implementations of React concepts.</li>
      </ul>

    </div>
        <button className='btn btn-primary my-3' onClick={changetheme}>{btnText}</button>
        </>
    );
}