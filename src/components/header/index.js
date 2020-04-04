import React, { useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "./search-bar";
import Logo from "../../components/assets/img/logo.png";

const Header = (props) => {
    const [keyword, setKeyword] = useState("");
    function handleKeywordChange(newKeyword) {
        setKeyword(newKeyword);
       props.onSearch(newKeyword);
    }
    return (
        <header>
            <h1><Link to='/'><img src={Logo} className="site-logo" alt="site-logo"/></Link></h1>
            <Searchbar keyword={keyword} handleKeywordChange={handleKeywordChange}/>
        </header>
    );
}

export default Header;
