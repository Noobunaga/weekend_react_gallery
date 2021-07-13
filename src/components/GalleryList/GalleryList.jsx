import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import './GalleryList.css';


function GalleryList({galleryAlbum, addLove}){

    return (
        <>
            <div className="album-container">
                {galleryAlbum.map(item =>
                    {return (<GalleryItem
                        key={item.id}
                        item={item}
                        addLove={addLove}
                        />)})
                }
            </div>
        </>
    );
}

export default GalleryList;