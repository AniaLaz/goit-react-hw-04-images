import { useEffect } from 'react';
import css from '../Modal/Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ onClose, children }) => {

  useEffect(() => {
      const handleKeyDown = e => {
        if (e.code === 'Escape') {
          onClose();
        }
      };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);



  const handlBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={css.backdrop} onClick={handlBackdrop}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
};

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       console.log('yfnbcyekb esx');
//       console.log('e', e.code);
//       this.props.onClose();
//     }
//     };

//     handlBackdrop = e => {
//         if (e.currentTarget === e.target)
//            {this.props.onClose();}
//     }

//   render() {
//     return createPortal(
//            <div className={css.backdrop} onClick={this.handlBackdrop}>
//           <div className={css.modal}>
//             {this.props.children}
//                  </div>
//         </div>,
//         modalRoot
//     );
//   }
// }
