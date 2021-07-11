import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import './GalleryList.css';


function GalleryList({galleryAlbum, addLove}){

    return (
        <>
            <div className="album-container">
                {galleryAlbum.map(item =>
                    <GalleryItem
                        key={item.id}
                        path={item}
                        addLove={addLove}
                        />
                )}
            </div>
        </>
    );
}

export default GalleryList;