import axios from "axios";
import { useEffect, useState } from "react"

import "../styles/character-card.scss"

export const CharacterCards = ({ searchTerm, sort }) => {
  const [disneyCharacters, setDisneyCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const charactersRes = axios.get("https://api.disneyapi.dev/characters")
      if (!searchTerm.length) {
        try {
          let response = await charactersRes;
          setDisneyCharacters(response.data.data);
              }
        catch (e) {
          console.log('Request Failed:', e);
        }
      }
    }
    getCharacters();
  }, [searchTerm])

  useEffect(() => {
    const getSearchedCharacter = async () => {
      const searchCharactersRes = axios.get("https://api.disneyapi.dev/character", { params: { name: searchTerm } });
      if (searchTerm.length) {
        try {
          let response = await searchCharactersRes;
          setDisneyCharacters(response.data.data);
        }
        catch (e) {
          console.log('Request Failed:', e);
        }
      }
    }
    getSearchedCharacter();
  }, [searchTerm]);


  const sortAlpha = (arr) => {
    arr.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;

      return 0;
    });
  };

  const sortReverse = (arr) => {
    arr.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;

      return 0;
    });
  };

  sort ? sortAlpha(disneyCharacters) : sortReverse(disneyCharacters);

  return (
    disneyCharacters.length ?
    disneyCharacters.map((character, i) => {
      return (
        <div className="col-sm-6 col-lg-4 mb-4" key={i}>
          <div className="card h-100  border-secondary">
            <img src={character.imageUrl} className="card-img-top card-img" alt="disney character" />
            <div className="card-body">
              <h2 className="card-title">{character.name}</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <div><strong>Featured Films:</strong></div>
                  {
                    character.films.length ? character.films.map((film, i) => {
                      return (
                        <div key={i}>{film}</div>
                      )
                    })
                    : "Not featured in any Disney movies"
                  } 
                </li>
                <li className="list-group-item">
                  <div><strong>Featured TV Shows:</strong></div>
                  {
                    character.tvShows.length ? character.tvShows.map((shows, i) => {
                      return (
                        <div key={i}>{shows}</div>
                      )
                    })
                    : "Not featured in any Disney TV shows"
                  } 
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    })
    : 
    <div className="col-xs-12">
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  )
}