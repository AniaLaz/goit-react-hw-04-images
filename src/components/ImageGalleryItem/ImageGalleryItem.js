import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import cssModal from '../Modal/Modal.module.css';
import { AiOutlineClose } from 'react-icons/ai';

export const ImageGalleryItem = ({ shouModal, largeImageURL, tags, webformatURL }) => {
  // const [urlBig, setUrlBig] = useState('');
  const [showModal, setShowModal] = useState(false);

  const oupenModal = () => {
    setShowModal(!showModal );
  };

  return (
    <>
      <li className={css.imageGalleryItem} onClick={oupenModal}>
        <img
          className={css.imageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          url={largeImageURL}
        />
      </li>
      {showModal && (
        <Modal onClose={oupenModal} shouModal={shouModal}>
          <img
            className={cssModal.modalImg}
            src={largeImageURL}
            // src={this.state.urlBig}
            alt={tags}
          />
          <button
            type="button"
            className={cssModal.modal__button}
            onClick={oupenModal}
          >
            <AiOutlineClose />
          </button>
        </Modal>
      )}
    </>
  );
};


//   oupenModal = () => {
//     this.setState(state => ({ showModal: !state.showModal }));
//   };

//   render() {
//     return (
//       <>
//         <li className={css.imageGalleryItem} onClick={this.oupenModal}>
//           <img
//             className={css.imageGalleryItemImage}
//             src={this.props.webformatURL}
//             alt={this.props.tags}
//             url={this.props.largeImageURL}
//           />
//         </li>
//         {this.state.showModal && (
//           <Modal onClose={this.oupenModal} shouModal={this.props.shouModal}>
//             <img
//               className={cssModal.modalImg}
//               src={this.props.largeImageURL}
//               // src={this.state.urlBig}
//               alt={this.props.tags}
//             />
//             <button
//               type="button"
//               className={cssModal.modal__button}
//               onClick={this.oupenModal}
//             >
//               <AiOutlineClose />
//             </button>
//           </Modal>
//         )}
//       </>
//     );
//   }
// }
