
import { useState, type ReactNode } from "react";
import { ToastContext } from "./ToastContextStore";
import { FaCheck } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { Link} from "react-router-dom";
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
      <div className="fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-[420px] z-[100] space-y-3">

        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`
              flex items-center justify-between gap-3
              px-4 py-3
              rounded-[2rem]
              shadow-xl
              text-white
              animate-in slide-in-from-top-3 fade-in duration-300
              ${
                toast.type === "error"
                  ? "bg-red-600"
                  : "bg-green-600"
              }
            `}
          >
            {/* LEFT CONTENT */}
            <div className="flex items-center gap-3 min-w-0">

              {/* CHECK ICON */}
              <div className="w-12 h-12 shrink-0 rounded-full bg-white/90 flex items-center justify-center">
                {toast.type === "error" ? (
                  <span className="text-red-600 text-xl font-bold">
                    !
                  </span>
                ) : (
                  <FaCheck className="text-green-600 text-xl" />
                )}
              </div>

              {/* MESSAGE */}
              <div className="min-w-0">
                

                <p className="text-white/80 text-sm mt-1 truncate">
                  {toast.message}
                </p>
              </div>
            </div>

            {/* VIEW CART */}
            {toast.type !== "error" && (

              <Link to="cart-page"
                className="
                  shrink-0
                  flex items-center gap-2
                  px-4 py-3
                  rounded-full
                  bg-black/20
                  hover:bg-black/30
                  transition-colors duration-300
                  text-sm font-semibold
                  whitespace-nowrap
                "
              >
                <FiShoppingBag className="text-base" />
                View Cart
              </Link>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
