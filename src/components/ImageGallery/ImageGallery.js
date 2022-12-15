import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';


export const ImageGallery = ({ pictureArr, oupenModal, shouModal }) => {
  return (
    <div className="gallary">
      <ul className={css.imageGallery}>
        {pictureArr.map(picture => (
          <ImageGalleryItem
            key={picture.id}
            pictureArr={pictureArr}
            shouModal={shouModal}
            webformatURL={picture.webformatURL}
            tags={picture.tags}
            largeImageURL={picture.largeImageURL}
          />
        ))}
      </ul>
    </div>
  );
};
