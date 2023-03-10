import { useState } from 'react';
import { AppWrap } from './App.styled';

import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../Searchbar/Searchbar';

const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const onSubmit = data => {
    setSearch(data);
    setPage(1);
  };

  return (
    <AppWrap>
      <Searchbar onFormSubmit={onSubmit} />
      <ImageGallery
        search={search}
        page={page}
        loadMore={() => {
          setPage(page + 1);
        }}
      />
    </AppWrap>
  );
};

export default App;
