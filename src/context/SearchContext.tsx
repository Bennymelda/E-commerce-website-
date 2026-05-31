import { createContext, useContext } from "react";
type SearchContextType = {
 search: string;
 setSearch: (value: string) => void;
};

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
 const context = useContext(SearchContext);
 if (!context) throw new Error("useSearch must be used inside provider");
 return context;
};