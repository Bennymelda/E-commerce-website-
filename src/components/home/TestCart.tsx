
import { useCart } from "../../hooks/useCart";
import type { Product } from "../../types/product.types";
const product: Product = {
 id: "1",
 name: "Nike Shoe",
 category: "Shoes",
 price: 120,
 image: "https://via.placeholder.com/150",
 description: "Sample product used for cart testing.",
 rating: 4.5,
 reviewsCount: 10,
 stock: 20,
 unit: "1 pair",
};

const TestCart = () => {
 const {
 cartItems,
 addToCart,
 increaseQuantity,
 decreaseQuantity,
 getQuantity,
 } = useCart();

 const quantity = getQuantity(product.id);

 return (
 <div className="p-6">
 <h1 className="text-2xl font-bold mb-4">Test Cart</h1>

 {/* PRODUCT */}
 <div className="border p-4 rounded-xl w-72">
 <img
 src={product.image}
 alt={product.name}
 className="w-full h-40 object-cover rounded-lg"
 />

 <h2 className="mt-3 font-semibold">{product.name}</h2>

 <p>${product.price}</p>

 {/* BUTTON LOGIC */}
 <div className="mt-4">
 {quantity === 0 ? (
 <button
 onClick={() => addToCart(product)}
 className="bg-black text-white px-4 py-2 rounded-full w-full"
 >
 Add To Cart
 </button>
 ) : (
 <div className="flex items-center justify-between bg-black text-white px-4 py-2 rounded-full">
 <button onClick={() => decreaseQuantity(product.id)}>
 -
 </button>

 <span>{quantity}</span>

 <button onClick={() => increaseQuantity(product.id)}>
 +
 </button>
 </div>
 )}
 </div>
 </div>

 {/* CART DATA */}
 <div className="mt-8">
 <h2 className="text-xl font-bold">Cart Items</h2>

 <pre className="bg-gray-100 p-4 rounded-lg mt-3">
 {JSON.stringify(cartItems, null, 2)}
 </pre>
 </div>
 </div>
 );
};

export default TestCart;