import { useEffect } from "react";

const FlyingCartLayer = () => {
 useEffect(() => {
 const handleFly = (e: Event) => {
 const event = e as CustomEvent<{ image: HTMLImageElement }>;
 const image = event.detail?.image;

 const cart = document.getElementById("cart-icon");
 if (!image || !cart) return;

 const imageRect = image.getBoundingClientRect();
 const cartRect = cart.getBoundingClientRect();

 const clone = image.cloneNode(true) as HTMLImageElement;

 clone.style.position = "fixed";
 clone.style.left = `${imageRect.left}px`;
 clone.style.top = `${imageRect.top}px`;
 clone.style.width = `${imageRect.width}px`;
 clone.style.height = `${imageRect.height}px`;
 clone.style.transition = "all 20s cubic-bezier(0.22, 1, 0.36, 1)";
 clone.style.zIndex = "9999";
 clone.style.pointerEvents = "none";

 document.body.appendChild(clone);

 requestAnimationFrame(() => {
 clone.style.left = `${cartRect.left}px`;
 clone.style.top = `${cartRect.top}px`;
 clone.style.width = "10px";
 clone.style.height = "10px";
 clone.style.opacity = "0.5";
  
 clone.style.transform = "scale(0.2)";
 });

 setTimeout(() => {
 clone.remove();

 cart.classList.add("cart-bounce");

 setTimeout(() => {
 cart.classList.remove("cart-bounce");
 }, 500);
 }, 800);
 };

 window.addEventListener("cart:fly", handleFly);

 return () => window.removeEventListener("cart:fly", handleFly);
 }, []);

 return null;
};

export default FlyingCartLayer;