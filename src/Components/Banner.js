
import '../index.css';

function Banner(){


    return(
        <div className="banner">
            <div className="badging-indicator">NEW!
                </div>
                <div className="banner-content">

                <span>Plans now start at
                    <span className="price-label">£4.99.</span>
                </span>
            </div>
          <div className='action-wrapper'>
                <button className="learn-more">Learn More</button>
                <span className="material-symbols-outlined">
                chevron_right
                </span>
                </ div>
         </div>
       
     
        

    )
};

export default Banner