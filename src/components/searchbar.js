
function SearchBar({searchTerm, setSearchTerm, onSearch, onGoBack}){

    const handleKeyPress = (e) => {
      if(e.key === "Enter"){
        onSearch();
        setSearchTerm("");
      }
     
    };

    const handleGoBack = () => {
      onGoBack();
    }

    return(
      <div>
        <input
          type="text"
          placeholder="search Transactions"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown = {handleKeyPress}
        />
        <button style={{ backgroundColor:"#0a511a", color: "white"  }} 
           onClick={onSearch} >Search
          </button>
          {searchTerm && (
            <button onClick={handleGoBack}>Go Back</button>
          )}
         
      </div>
        
    )
}

export default SearchBar