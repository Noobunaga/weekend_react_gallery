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
                <p className="love_counter">Loves: {props.love}</p>
                <button className="love_counter" onClick={() => props.addLove(props.id)}></button>
            </div>
        </div>    
    );
}


export default GalleryItem;