import { createContext } from "react";

export type ToastContextType = {
  showToast: (message: string, type?: "success" | "error") => void;
};

export const ToastContext = createContext<ToastContextType | null>(null);
