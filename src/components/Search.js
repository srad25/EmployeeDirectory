import React from "react";

const Search = (props) => {

    return (
    <form>
    <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="d-grid col-6 mx-auto btn-light"
          placeholder='Search for Employee'
          id="search"
        />
      </div>
  
  </form>
  );
}
export default Search;