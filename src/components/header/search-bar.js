import React from 'react';

const Searchbar = (props) => {
    function onKeywordChange(e) {
        e.preventDefault();
        props.handleKeywordChange(e.target.keyword.value);        
    }
    return (
        <form onSubmit={onKeywordChange}>
            <input type="text" name="keyword" placeholder="cari podcast ..." />
            <button type="submit" name="btn-search">Search</button>
        </form>
    );
}

export default Searchbar;
