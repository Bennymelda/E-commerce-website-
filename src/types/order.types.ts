import type { CartItem } from "../context/CartContextStore";

export type OrderStatus =
 | "processing"
 | "shipped"
 | "delivered";


export type Order = {
 id: string;
 items: CartItem[];
 total: number;
 status: OrderStatus;
 createdAt: string;
};