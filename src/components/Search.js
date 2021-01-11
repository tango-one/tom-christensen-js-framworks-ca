// libraries

// styles
import "../styles/Search.css";

const Search = ({ handleSearch }) => {
  return (
    <div className='col-11 col-md-6 mx-auto  my-3 my-md-5'>
      <input
        placeholder='Search games'
        className='search'
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
