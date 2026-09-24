import './SearchBar.css';

function SearchBar({ searchTerm, onSearch }) {
  return (
    <input className='search-bar'
      type="text"
      placeholder="Buscar cliente..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}


export default SearchBar;