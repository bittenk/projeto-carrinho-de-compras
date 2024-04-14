import React, { useState, useContext } from "react";
import { BiSearch } from "react-icons/bi";

import "./SearchBarra.css";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

function SearchBarra() {
  const { setProducts, setLoading } = useContext(AppContext);

  const [SearchValue, setSearchValue] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(SearchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue("");
  };

  return (
    <form className="search-barra" onSubmit={handleSearch}>
      {name}
      <input
        type="search"
        value={SearchValue}
        placeholder="Buscar Produtos"
        className="search__input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />

      <button type="submit" className="search__button">
        <BiSearch />
      </button>
    </form>
  );
}

export default SearchBarra;
