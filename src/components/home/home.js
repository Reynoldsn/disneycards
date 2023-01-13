import { useState } from 'react';
import { Header } from '../header/header';
import { CharacterCards } from '../character-card/character-card';
import { Paginator } from '../paginator/paginator';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sort, setSort] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      <div className="container">
        <div className="col-sm-12 d-flex justify-content-between">
          <button type="button" className="btn btn-outline-secondary mb-3" onClick={() => setSort(!sort)}>
            {sort ? 'Sort Alphabetically' : 'Sort Reverse'}
          </button>
          <Paginator setPageNumber={setPageNumber} pageNumber={pageNumber} />
        </div>
        <div className="row">
          <CharacterCards searchTerm={searchTerm} sort={sort} pageNumber={pageNumber} />
        </div>
        <div className="d-flex justify-content-end mb-3">
          <Paginator setPageNumber={setPageNumber} pageNumber={pageNumber} />
        </div>
      </div>
    </>
  );
};
