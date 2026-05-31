import { useParams } from "react-router-dom";
import ProductGrid from "../components/product/ProductGrid";
import { products } from "../data/products";
import { categories } from "../data/categories";
import { useSearch } from "../context/SearchContext";
import { useMemo } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const CategoryPage = () => {
 const { slug } = useParams();
 const { search } = useSearch();

 const category = categories.find((cat) => cat.slug === slug);

 const categoryProducts = products.filter(
 (product) => product.category === slug
 );
const navigate = useNavigate();

useEffect(() => {
 const user = localStorage.getItem("currentUser");

 if (!user) {
 navigate("/login");
 }
}, []);
 // 🔥 SEARCH OVERRIDE LOGIC
 const filteredProducts = useMemo(() => {
 const query = search.toLowerCase();

 if (!query) return categoryProducts;

 const matched = categoryProducts.filter((p) =>
 p.name.toLowerCase().includes(query)
 );

 const others = categoryProducts.filter(
 (p) => !p.name.toLowerCase().includes(query)
 );

 return [...matched, ...others];
 }, [search, categoryProducts]);

 return (
 <div className="p-6">
 <div className="mb-8">
 <h1 className="text-3xl font-bold">{category?.name}</h1>
 <p className="text-gray-500 mt-2">
 Showing all products in this category
 </p>
 </div>

 <ProductGrid products={filteredProducts} />
 </div>
 );
};

export default CategoryPage;