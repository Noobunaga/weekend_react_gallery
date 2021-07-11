import { useState } from "react";
import './GalleryItem.css';

function GalleryItem({path, addLove}) {
    const [display, setDisplay] = useState(true);
    console.log(path);
    console.log(addLove);

    const togglePic = () => {
        setDisplay(!display);
    }

    return (
        <div className="container">
            <section onClick={() => togglePic(path.id)} className="galleryItem">
                {display && 
                <img className="photoItem" src={path.path} alt={path.description}></img>}
                {!display &&
                <p className="photoDescription">{path.description}</p>}
            {/* {displayDescription ? <p className="pic-description" onCLick={togglePic}>{props.description}</p> : 
            <img className="item-pic" onClick={togglePic} src={props.path} alt="art"/>}
            <div>
                <p className="love-counter">Loves: {props.love}</p>
                <button className="love-counter-btn" onClick={() => props.addLove(props.id)}>LOVE IT! {props.love}</button> */}
            {/* </div> */}
            </section>
        </div>    
    );
}


export default GalleryItem;