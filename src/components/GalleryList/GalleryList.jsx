import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import './GalleryList.css';


function GalleryList(props){
    console.log(props);

    return (
        <>
        <section>
            {props.galleryAlbum.map(
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