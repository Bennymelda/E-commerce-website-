export interface Product {
 id: string;
 name: string;
 category:string;

 price: number;
 oldPrice?: number;
 discount?: number;

 image: string;
 images?: string[];

 description: string;
 ingredients?: string[];

 rating: number;
 reviewsCount: number;

 stock: number;
 unit: string;

 featured?: boolean;
 trending?: boolean;
 organic?: boolean;

 tags?: string[];

 nutrition?: {
 calories?: number;
 protein?: string;
 carbs?: string;
 fat?: string;
 fiber?: string;
 };

 deliveryTime?: string;

 createdAt?: string;
}