import { useState } from "react";
import './GalleryItem.css';

function GalleryItem(props) {
    const [displayDescription, setDisplayDescription] = useState(false);

    const togglePic = () => {
        setDisplayDescription(!displayDescription);
    }

    return (
        <div>
            {displayDescription ? <p className="pic-description" onCLick={togglePic}>{props.description}</p> : 
            <img className="item-pic" onClick={togglePic} src={props.path} alt="art"/>}
            <div>
                <p className="love-counter">Loves: {props.love}</p>
                <button className="love-counter-btn" onClick={() => props.addLove(props.id)}>LOVE IT!</button>
            </div>
        </div>    
    );
}


export default GalleryItem;