
function SearchBar({searchTerm, setSearchTerm, onSearch}){

    const handleKeyPress = (e) => {
      if(e.key === "Enter"){
        onSearch();
        setSearchTerm("");
      }
     
    };

    return(
      <div>
        <input
          type="text"
          placeholder="search Transactions"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button style={{ backgroundColor:"#0a511a", color: "white"  }} onClick={handleKeyPress} >Search</button>
        
      </div>
        
    )
}

export default SearchBar