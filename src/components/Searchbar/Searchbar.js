import { Component } from 'react';
import css from '../Searchbar/Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';


export class Searchbar extends Component {
  state = {
    pictureName: '',
  };

  changInput = event => {
    this.setState({ pictureName: event.currentTarget.value.toLowerCase() });
  };

  handlrSubmit = event => {
    event.preventDefault();
    if (this.state.pictureName.trim() === '') {
      alert('ви нічого не ввели!');
      return;
    }
    this.props.onSubmit(this.state.pictureName);
    this.setState({ pictureName: '' });
    this.props.getQuary(this.state.pictureName);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handlrSubmit} className={css.searchForm}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}><BsSearch/></span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.changInput}
            value={this.state.pictureName}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
