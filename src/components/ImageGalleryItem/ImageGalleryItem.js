import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import { Component } from 'react';
import { Modal } from '../Modal/Modal';
import cssModal from '../Modal/Modal.module.css';
import { AiOutlineClose } from 'react-icons/ai';

export class ImageGalleryItem extends Component {
  state = {
    urlBig: '',
    showModal: false,
  };

  oupenModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  // onClickUrlBig = () => {
  //   this.setState({ urlBig: this.props.largeImageURL });
  //   this.props.oupenModal();
  //   console.log('this.state.urlBig', this.state.urlBig);
  // }

  render() {
    return (
      <>
        <li className={css.imageGalleryItem} onClick={this.oupenModal}>
          <img
            className={css.imageGalleryItemImage}
            src={this.props.webformatURL}
            alt={this.props.tags}
            url={this.props.largeImageURL}
          />
        </li>
        {this.state.showModal && (
          <Modal onClose={this.oupenModal} shouModal={this.props.shouModal}>
            <img
              className={cssModal.modalImg}
              src={this.props.largeImageURL}
              // src={this.state.urlBig}
              alt={this.props.tags}
            />
            <button
              type="button"
              className={cssModal.modal__button}
              onClick={this.oupenModal}
            >
              <AiOutlineClose />
            </button>
          </Modal>
        )}
      </>
    );
  }
}
