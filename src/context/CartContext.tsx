import { useCallback, useEffect, useMemo, useState } from "react";
import type { Product } from "../types/product.types";
import { CartContext, type CartItem } from "./CartContextStore";

export const CartProvider = ({
 children,
}: {
 children: React.ReactNode;
}) => {
const [cartItems, setCartItems] = useState<CartItem[]>(() => {
 const storedCart = localStorage.getItem("cart");

 return storedCart ? JSON.parse(storedCart) : [];
});
const [isMiniCartOpen, setIsMiniCartOpen] = useState(() => {
 const saved = localStorage.getItem("miniCartOpen");
 return saved ? JSON.parse(saved) : false;
});

const [isCartOpen, setIsCartOpen] = useState(() => {
 const saved = localStorage.getItem("sidebarOpen");
 return saved ? JSON.parse(saved) : false;
});

const openCart = useCallback(() => setIsCartOpen(true), []);
const closeCart = useCallback(() => setIsCartOpen(false), []);
const toggleCart = useCallback(() => setIsCartOpen((prev: boolean) => !prev), []);
const openMiniCart = () => setIsMiniCartOpen(true);
const closeMiniCart = () => setIsMiniCartOpen(false);
useEffect(() => {
 localStorage.setItem("sidebarOpen", JSON.stringify(isCartOpen));
}, [isCartOpen]);
useEffect(() => {
 localStorage.setItem("miniCartOpen", JSON.stringify(isMiniCartOpen));
}, [isMiniCartOpen]);

useEffect(() => {
 localStorage.setItem("cart", JSON.stringify(cartItems));
}, [cartItems]);
 // ADD ITEM
 const addToCart =useCallback((product: Product) => {
 setCartItems((prev) => {
 const existingItem = prev.find((item) => item.id === product.id);

 if (existingItem) {
 return prev.map((item) =>
 item.id === product.id
 ? { ...item, quantity: item.quantity + 1 }
 : item
 );
 }

 return [...prev, { ...product, quantity: 1 }];
 });
 }, []);

const removeFromCart = (id: string) => {
 setCartItems((prev: CartItem[]) =>
 prev.filter((item) => item.id !== id)
 );
};

const clearCart = () => {
 setCartItems([]);
};
 // INCREASE
 const increaseQuantity = useCallback((id: string) => {
 setCartItems((prev) =>
 prev.map((item) =>
 item.id === id
 ? { ...item, quantity: item.quantity + 1 }
 : item
 )
 );
 setIsMiniCartOpen(true)
 },[]);
const totalCartItems =useMemo(() => cartItems.reduce(
 (total, item) => total + item.quantity,
 0
), [cartItems]);
 // DECREASE
 const decreaseQuantity = useCallback((id: string) => {
 setCartItems((prev) =>
 prev
 .map((item) =>
 item.id === id
 ? { ...item, quantity: item.quantity - 1 }
 : item
 )
 .filter((item) => item.quantity > 0)
 );
 setIsMiniCartOpen(true)
 },[]);

 // GET QUANTITY
 const getQuantity = useCallback((id: string) => {
 const item = cartItems.find((item) => item.id === id);
 return item ? item.quantity : 0;
 },[cartItems]);
const totalPrice = useMemo(() => {
 return cartItems.reduce(
 (sum, item) => sum + item.price * item.quantity,
 0
 );
}, [cartItems]);
 return (
 <CartContext.Provider
 value={{
 cartItems,
 addToCart,
 increaseQuantity,
 decreaseQuantity,
 getQuantity,
 totalCartItems,
    openCart,
    closeCart,    
    toggleCart,
    isCartOpen,
    totalPrice,
    closeMiniCart,
    isMiniCartOpen,
    openMiniCart,
    removeFromCart,
    clearCart,

 }}
 >
 {children}
 </CartContext.Provider>
 );
};


