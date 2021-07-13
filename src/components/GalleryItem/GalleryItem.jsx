import react from 'react';
import { useState } from "react";
import './GalleryItem.css';

function GalleryItem({item, addLove}) {
    const [display, setDisplay] = useState(true);


    const togglePic = () => {
        setDisplay(!display)
    }

    // const clickLike = (event) =>{
    //     addLike(image);
    // };

    return (
        <>
        <div className="container">
            <section onClick={() => togglePic(item.id)} className="galleryItem">
                {display && 
                <img className="photoItem" src={item.path} alt={item.description}/>}
                {!display &&
                <p className="photoDescription">{item.description}</p>}
            </section>
        </div>  
        <button type button='button' onClick={() => addLove(item.id)}>Likes {item.likes} </button> 
        </>
    )
}

{/* <div>
    <button
        className="like-button"
        type="button"
        onClick={() => addLove(item)}
        >Love</button>
        <p>Loves: {item.id}</p>
</div> */}

export default GalleryItem;