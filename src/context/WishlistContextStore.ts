import { createContext } from "react";

export type WishlistContextType = {
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
};

export const WishlistContext = createContext<WishlistContextType | null>(null);
