import styles from './gallery-item.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ item: { tags, webformatURL }, id, onModal }) => {
  return (
    <li
      className={styles.gallery_item}
      onClick={() => {
        onModal(id);
      }}
    >
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    item: PropTypes.object,
    id: PropTypes.number,
    onModal: PropTypes.func,
  };