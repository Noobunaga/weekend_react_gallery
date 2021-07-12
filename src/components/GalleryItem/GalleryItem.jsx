import { useState } from "react";
import './GalleryItem.css';

function GalleryItem({path, addLove}) {
    const [display, setDisplay] = useState(true);


    const togglePic = () => {
        setDisplay(!display);
    }

    // const clickLike = (event) =>{
    //     addLike(image);
    // };

    return (
        <>
        <div className="container">
            <section onClick={() => togglePic(path.id)} className="galleryItem">
                {display && 
                <img className="photoItem" src={path.path} alt={path.description}></img>}
                {!display &&
                <p className="photoDescription">{path.description}</p>}
            </section>
        </div>  
        <button type button='button' onClick={() => addLove(path.id)}>Likes {path.love} </button> 
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