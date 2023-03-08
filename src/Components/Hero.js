import logo from "../images/Logo.png"

import Header from "./Header";
import '../index.css';

function Hero(){
    return(
       
    <div  className= "hero-image">
         <Header logo={logo}/>
       <div className='hero-section'>
          <h1>Unlimited films, TV programmes and more. 
            </h1>
          <p>Watch anywhere. Cancel at any time.</p>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="input-container">
        <input className="input-hero" placeholder="Email address" />
        <button className="get-started">Get Started <span class="material-symbols-outlined">
                chevron_right
                </span></button>

       </div>
       </div>
   
    </div>


    )
}

export default Hero;