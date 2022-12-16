import { useState, useEffect } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import autoscroll from '../Utils/Autosckroll';

export const App = () => {
  const [picturs, setPicturs] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [inLoading, setInLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getFetch() {
      try {
        setInLoading(true);
        await fetch(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=23818596-d5461ac6688865132aed17576&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(res => res.json())
          .then(picturs => {
            if (page === 1) {
              setPicturs(picturs.hits);
              setInLoading(false);
            } else {
              setPicturs(prevPicturs => [...prevPicturs, ...picturs.hits]);
              setInLoading(false);
            }
          });
      } catch {
        setError('что то пошло не так!');
        setInLoading(false);
      }
      autoscroll();
    }
    getFetch();
  }, [query, page]);

  const getQuary = queryFromBar => {
    setQuery(queryFromBar);
  };

  const onChang = query => {
    setPage(1);
    setQuery('');
    setQuery(query);
  };

  const loadMore = () => setPage(prev => prev + 1);

  return (
    <div>
      <Searchbar onSubmit={onChang} getQuary={getQuary} />
      {inLoading && <p>завантажується...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {picturs && <ImageGallery pictureArr={picturs} />}
      {picturs.length >= 12 && <Button onClick={loadMore} />}
    </div>
  );
};

// ++
// export class App extends Component {
//   state = {
//     picturs: [],
//     query: '',
//     page: 1,
//     inLoading: false,
//     error: null,
//   };

// +
//   getQuary = queryFromBar => {
//     this.setState({
//       query: queryFromBar,
//     });
//   };

// ++
//   async componentDidUpdate(_, prevState) {
//     const prevName = prevState.query;
//     const nextName = this.state.query;
//     try {
//       if (prevName !== nextName || prevState.page !== this.state.page) {
//         this.setState({ inLoading: true });
//         await fetch(
//           `https://pixabay.com/api/?q=${nextName}&page=${this.state.page}&key=23818596-d5461ac6688865132aed17576&image_type=photo&orientation=horizontal&per_page=12`
//         )
//           .then(res => res.json())
//           .then(picturs => {
//             if (this.state.page === 1) {
//               this.setState({ picturs: picturs.hits, inLoading: false });
//                 } else {
//               this.setState(data => ({
//                 picturs: [...prevState.picturs, ...picturs.hits],
//                 inLoading: false ,
//               }));
//             }
//           });
//       }
//     } catch (error) {
//       console.log(error);
//       this.setState({ error: 'что то пошло не так!', inLoading: false });
//     }
//    autoscroll();
//   }

// ++
//   onChang = query => {
//     this.setState({
//       page: 1,
//       query: '',
//     });
//     this.setState({ query });
//   ++
//   loadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <Searchbar onSubmit={this.onChang} getQuary={this.getQuary} />

//         {this.state.inLoading && <p>завантажується...</p>}
//         {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
//         {this.state.picturs && (
//           <ImageGallery

//             pictureArr={this.state.picturs}
//             shouModal={this.state.showModal}
//           />
//         )}
//         {this.state.picturs.length >= 12 && <Button onClick={this.loadMore} />}
//       </div>
//     );
//   }
// }
