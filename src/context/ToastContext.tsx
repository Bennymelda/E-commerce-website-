import { useState, type ReactNode } from "react";
import { ToastContext } from "./ToastContextStore";

type Toast = {
 id: number;
 message: string;
 type?: "success" | "error";
};

export const ToastProvider = ({
 children,
}: {
 children: ReactNode;
}) => {
 const [toasts, setToasts] = useState<Toast[]>([]);

 const showToast = (
 message: string,
 type: "success" | "error" = "success"
 ) => {
 const id = Date.now();

 const newToast = { id, message, type };

 setToasts((prev) => [...prev, newToast]);

 // AUTO REMOVE AFTER 3s
 setTimeout(() => {
 setToasts((prev) =>
 prev.filter((t) => t.id !== id)
 );
 }, 3000);
 };


 return (
 <ToastContext.Provider value={{ showToast }}>
 {children}

 {/* TOAST UI */}
 <div className="fixed top-5 right-5 space-y-2 z-50">
 {toasts.map((toast) => (
 <div
 key={toast.id}
 className={`
 px-4 md:px-8 py-5 md:py-10 rounded rounded-l-2xl  text-black shadow-sm
 ${
 toast.type === "error"
 ? "border-red-500 border-l-5 bg-white"
 : "border-green-500 border-l-5 bg-white "
 }
 `}
 >
 {toast.message}
 </div>
 ))}
 </div>
 </ToastContext.Provider>
 );
};

