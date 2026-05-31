import { useEffect, useState, type ReactNode } from "react";
import { WishlistContext } from "./WishlistContextStore";

const getInitialWishlist = () => {
  if (typeof window === "undefined") return [];

  try {
    const saved = localStorage.getItem("wishlist");
    return saved ? (JSON.parse(saved) as string[]) : [];
  } catch {
    return [];
  }
};

export const WishlistProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [wishlist, setWishlist] = useState<string[]>(getInitialWishlist);
  
  // SAVE TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

 // TOGGLE FUNCTION
 const toggleWishlist = (id: string) => {
 setWishlist((prev) =>
 prev.includes(id)
 ? prev.filter((item) => item !== id)
 : [...prev, id]
 );
 };

 const isInWishlist = (id: string) => {
 return wishlist.includes(id);
 };

 return (
 <WishlistContext.Provider
 value={{
 wishlist,
 toggleWishlist,
 isInWishlist,
 }}
 >
 {children}
 </WishlistContext.Provider>
 );
};

