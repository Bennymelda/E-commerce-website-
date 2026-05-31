import { createContext } from "react";
import type { Product } from "../types/product.types";

export type CartItem = Product & { quantity: number };

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  getQuantity: (id: string) => number;
    totalCartItems: number;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
    isCartOpen: boolean;
    totalPrice: number;
 
    closeMiniCart: () => void;
   
    isMiniCartOpen: boolean;
    openMiniCart: () => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);
