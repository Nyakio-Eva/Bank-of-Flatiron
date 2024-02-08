
function SearchBar({searchTerm, setSearchTerm, onSearch}){

    const handleSearch = () => onSearch();

    return(
      <div>
        <input
          type="text"
          placeholder="search Transactions"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} >Enter</button>
        
      </div>
        
    )
}

export default SearchBar