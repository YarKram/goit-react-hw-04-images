import PropTypes from 'prop-types';

import { useState } from 'react';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { ReactComponent as Search } from '../search.svg';

const Searchbar = ({ onFormSubmit }) => {
  const [search, setSearch] = useState('');

  const onInputChange = evt => {
    setSearch(evt.currentTarget.value);
  };

  const onFormInputSubmit = evt => {
    evt.preventDefault();
    onFormSubmit(search);
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={onFormInputSubmit}>
        <SearchFormButton type="submit" className="button">
          <Search width="40" height="40" />
        </SearchFormButton>

        <SearchFormInput
          name="name"
          onChange={onInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
