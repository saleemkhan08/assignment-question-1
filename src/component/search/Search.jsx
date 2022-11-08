const Search = ({ searchText, onChange }) => {
  return <input type="text" value={searchText} onChange={onChange} />
}

export default Search
