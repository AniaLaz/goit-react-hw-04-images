import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import autoscroll from '../Utils/Autosckroll'


// 23818596-d5461ac6688865132aed17576;

//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

export class App extends Component {
  state = {
    picturs: [],
    query: '',
    page: 1,
    inLoading: false,
    error: null,
  };

  getQuary = queryFromBar => {
    this.setState({
      query: queryFromBar,
    });
  };

  async componentDidUpdate(_, prevState) {
    const prevName = prevState.query;
    const nextName = this.state.query;

    try {
      if (prevName !== nextName || prevState.page !== this.state.page) {
        this.setState({ inLoading: true });
        await fetch(
          `https://pixabay.com/api/?q=${nextName}&page=${this.state.page}&key=23818596-d5461ac6688865132aed17576&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(res => res.json())
          .then(picturs => {
            if (this.state.page === 1) {
              this.setState({ picturs: picturs.hits, inLoading: false });
                } else {
              this.setState(data => ({
                picturs: [...prevState.picturs, ...picturs.hits],
                inLoading: false ,
              }));
            }
          });
      }
    } catch (error) {
      console.log(error);
      this.setState({ error: 'что то пошло не так!', inLoading: false }); 
    } 
   autoscroll(); 
  }

  onChang = query => {
    this.setState({
      page: 1,
      query: '',
    });
    this.setState({ query });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onChang} getQuary={this.getQuary} />

        {this.state.inLoading && <p>завантажується...</p>}
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
        {this.state.picturs && (
          <ImageGallery

            pictureArr={this.state.picturs}
            shouModal={this.state.showModal}
          />
        )}
        {this.state.picturs.length >= 12 && <Button onClick={this.loadMore} />}
      </div>
    );
  }
}

// {
//   /* {this.state.showModal && (
//       <Modal onClose={this.togglModal}>
//         <div>hsksr;</div>
//         <button
//           type="button"
//           className={css.modal__button}
//           onClick={this.togglModal}
//         >
//           X
//         </button>
//       </Modal>
//     )} */
// }
// {
//   /* {this.state.error && <p>Щось пішло не такБ спробуйте ще раз</p>} */
// }
// {
//   /* {this.state.inLoading & this.state.picturt ? (
//       <p>завантажуэться...</p>
//     ) : (
//       <ImageGallery
//         pictureArr={this.state.picturt}
//         oupenModal={this.gatBigImg}
//         shouModal={this.state.showModal}
//       />
//     )} */
// }
