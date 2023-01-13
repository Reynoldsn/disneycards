import "../styles/header.scss"

export const Header = ({ setSearchTerm }) => {
  return (
    <nav className="navbar">
      <div className="container-fluid px-4">
        <div className="navbar-brand">
          <div className="title">Who Dis-ney</div>
        </div>
        <form className="d-flex">
          <input className="form-control" type="search" placeholder="Search Name" aria-label="Search" onChange={(e) => {setTimeout(() => {setSearchTerm(e.target.value) }, 500)}} />
        </form>
      </div>
    </nav>
  )
}