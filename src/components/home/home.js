import { useState } from "react"
import { Header } from "../header/header"
import { CharacterCards } from "../character-card/character-card"

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState(false);

  return ( 
    <>
      <Header setSearchTerm={setSearchTerm} />
      <div className="container">
        <button type="button" className="btn btn-outline-secondary mb-3" onClick={() => setSort(!sort)}>
          {sort ? "Sort Alphabetically" : "Sort Reverse"}
        </button>
        <div className="row">
          <CharacterCards searchTerm={searchTerm} sort={sort} />
        </div>
      </div>
    </>
  )
}