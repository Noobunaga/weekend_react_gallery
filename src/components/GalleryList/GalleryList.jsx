import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import './GalleryList.css';


function GalleryList(props){
    console.log(props);

    return (
        <>
            <section className="album-container">
                {props.galleryAlbum.map(item =>
                    <GalleryItem
                        key={item.id}
                        id={item.id}
                        path={item.path}
                        description={item.description}
                        loves={item.loves}
                        addLove={props.addLove}
                        />
                )}
            </section>
        </>
    );
}

export default GalleryList;