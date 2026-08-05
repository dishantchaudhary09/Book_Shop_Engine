import React from "react"
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react"
export const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState();
    return (
        <SearchContext.Provider value={{ search,setSearch }}>
            {children}
        </SearchContext.Provider>
    );
};
export const useSearch = () => useContext(SearchContext);