import { Component } from 'react';
import css from '../Modal/Modal.module.css';
import { createPortal } from 'react-dom';


const modalRoot = document.getElementById('modal-root');

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);


export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('yfnbcyekb esx');
      console.log('e', e.code);
      this.props.onClose();
    }
    };
    
    handlBackdrop = e => {
        if (e.currentTarget === e.target)
           {this.props.onClose();}
    }

  render() {
    return createPortal(
           <div className={css.backdrop} onClick={this.handlBackdrop}>
          <div className={css.modal}>
            {this.props.children}
                 </div>
        </div>,
        modalRoot
    );
  }
}


