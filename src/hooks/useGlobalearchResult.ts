import { useSearch } from "../context/SearchContext";
import { useMemo } from "react";
import { products } from "../data/products";

export const useGlobalSearchResults = () => {
 const { search } = useSearch();

 const results = useMemo(() => {
 const query = search.toLowerCase();

 if (!query) return null;

 const matched = products.filter((p) =>
 p.name.toLowerCase().includes(query)
 );

 const others = products.filter(
 (p) => !p.name.toLowerCase().includes(query)
 );

 return [...matched, ...others];
 }, [search]);

 return {
 isSearching: !!search,
 results,
 };
};